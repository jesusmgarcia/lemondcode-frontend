import React from "react";
import { Link, generatePath } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import * as classes from "./list.styles";

import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";

interface MemberEntity {
	id: string;
	login: string;
	avatar_url: string;
}

export const ListPage: React.FC = () => {
	const [members, setMembers] = React.useState<MemberEntity[]>([]);
	const [filter, setFilter] = React.useState<string>("lemoncode");

	const useStyles = makeStyles((theme) => ({
		sizeAvatar: {
			height: theme.spacing(6),
			width: theme.spacing(6)
		}
	}));

	const avatarClass = useStyles();

	React.useEffect(() => {
		handleSearch(null);
	}, []);

	function handleSearch(e) {
		fetch(`https://api.github.com/orgs/${filter}/members`)
			.then((response) => response.json())
			.then((json) => setMembers(json));
	}

	return (
		<div className={classes.root}>
			<Card>
				<CardHeader title="Github Org List" />
				<CardContent>
					<TextField
						label="Search Org Name"
						margin="normal"
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
					/>
				</CardContent>
				<CardActions style={{ justifyContent: "center" }}>
					<Button
						type="submit"
						onClick={(e) => handleSearch(e)}
						variant="contained"
						color="primary"
					>
						Search
					</Button>
				</CardActions>
			</Card>

			<div className={classes.table_50}>
				<TableContainer component={Paper}>
					<Table aria-label="list table">
						<TableHead>
							<TableRow>
								<TableCell align="right">Avatar</TableCell>
								<TableCell align="right">Id</TableCell>
								<TableCell align="right">Name</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{members.map((member) => (
								<TableRow key={member.login}>
									<TableCell>
										<Avatar
											className={avatarClass.sizeAvatar}
											alt={member.login}
											src={member.avatar_url}
										/>
									</TableCell>
									<TableCell align="right">{member.id}</TableCell>
									<TableCell align="right">
										<Link
											to={generatePath("/detail/:id", { id: member.login })}
										>
											{member.login}
										</Link>{" "}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
};
