import React from "react";
import { Link, generatePath } from "react-router-dom";

interface MemberEntity {
	id: string;
	login: string;
	avatar_url: string;
}

export const ListPage: React.FC = () => {
	const [members, setMembers] = React.useState<MemberEntity[]>([]);
	const [filter, setFilter] = React.useState<string>("lemoncode");

	React.useEffect(() => {
		handleSearch(null);
	}, []);

	function handleSearch(e) {
		fetch(`https://api.github.com/orgs/${filter}/members`)
			.then((response) => response.json())
			.then((json) => setMembers(json));
	}

	return (
		<>
			<h2>Hello from List page</h2>
			<input
				type="search"
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
			/>
			<button type="submit" onClick={(e) => handleSearch(e)}>
				Buscar
			</button>
			<table className="table">
				<thead>
					<tr>
						<th>Avatar</th>
						<th>Id</th>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					{members.map((member) => (
						<tr key={member.id}>
							<td>
								<img src={member.avatar_url} style={{ width: "5rem" }} />
							</td>
							<td>
								<span>{member.id}</span>
							</td>
							<td>
								<Link to={generatePath("/detail/:id", { id: member.login })}>
									{member.login}
								</Link>{" "}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};
