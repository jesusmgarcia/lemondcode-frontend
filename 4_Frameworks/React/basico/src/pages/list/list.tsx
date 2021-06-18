import React from "react";
import { Link, generatePath, useParams } from "react-router-dom";
import { OrgContext } from "../../components/OrgContextProvider/OrgContextProvider";
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
import Pagination from "@material-ui/lab/Pagination";

let parseLink = require("parse-link-header");
interface MemberEntity {
	id: string;
	login: string;
	avatar_url: string;
}

const itemsPerPage = 5;

// styles for avatar images
const useStyles = makeStyles((theme) => ({
	sizeAvatar: {
		height: theme.spacing(6),
		width: theme.spacing(6)
	}
}));

// TODO: In order to persist organization name, save it to localStorage

export const ListPage: React.FC = () => {
	// organization context
	const { orgName, setOrgName } = React.useContext(OrgContext);
	const { currentPage, setCurrentPage } = React.useContext(OrgContext);
	const { totalPages, setTotalPages } = React.useContext(OrgContext);

	// local component data, filter is feeded with the context
	const [members, setMembers] = React.useState<MemberEntity[]>([]);

	const avatarClass = useStyles();

	const getMemberList = async (): Promise<MemberEntity[]> => {
		return fetch(
			`https://api.github.com/orgs/${orgName}/members?per_page=${itemsPerPage}&page=${currentPage}`
		)
			.then((response) => {
				let parsedLink = parseLink(response.headers.get("Link"));
				if (parsedLink.last) setTotalPages(parsedLink.last.page);
				if (response.ok) return response.json();
				else return [];
			})
			.then((json) => json)
			.catch((error) => {
				console.error(error);
				return [];
			});
	};

	const onLoadComponent = async () => {
		const memberList = await getMemberList();
		setMembers(memberList);
	};

	React.useEffect(() => {
		onLoadComponent();
	}, [currentPage]);

	// handle organization name and save it to context
	function handleOrgName(value) {
		setOrgName(value);
	}

	// GET to github REST API to get our default organization member list
	React.useEffect(() => {
		//setCurrentPage(contextCurrentPage);
		//setContextCurrentPage(contextCurrentPage);
	}, []);

	// GET to github REST API to get the organization member list given
	// by the user
	function handleSearch(e) {
		if (e) e.preventDefault();

		setCurrentPage(1);
	}

	const handlePageChange = (event, value) => {
		//setCurrentPage(value);
		setCurrentPage(value);
	};

	return (
		<div className={classes.root}>
			<form onSubmit={(e) => handleSearch(e)}>
				<Card>
					<CardHeader title="Github Org List" />
					<CardContent>
						<TextField
							label="Search Org Name"
							margin="normal"
							value={orgName}
							onChange={(e) => handleOrgName(e.target.value)}
						/>
					</CardContent>
					<CardActions style={{ justifyContent: "center" }}>
						<Button type="submit" variant="contained" color="primary">
							Search
						</Button>
					</CardActions>
				</Card>
			</form>
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
										</Link>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<Pagination
				count={Number(totalPages)}
				page={Number(currentPage)}
				onChange={handlePageChange}
				size="large"
			/>
		</div>
	);
};
