import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import * as classes from "./detail.styles";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	},
	media: {
		height: 140
	}
});
interface MemberDetailEntity {
	id: string;
	login: string;
	avatar_url: string;
	name: string;
	company: string;
	bio: string;
}

const createDefaultMemberDetail = () => ({
	id: "",
	login: "",
	avatar_url: "",
	name: "",
	company: "",
	bio: ""
});

type IdParams = {
	id: string;
};

export const DetailPage: React.FC = () => {
	const [member, setMember] = React.useState<MemberDetailEntity>(
		createDefaultMemberDetail()
	);
	const { id } = useParams<IdParams>();
	const cardClasses = useStyles();

	const history = useHistory();

	React.useEffect(() => {
		fetch(`https://api.github.com/users/${id}`)
			.then((response) => response.json())
			.then((json) => setMember(json));
	}, []);

	return (
		<div className={classes.root}>
			{member.avatar_url ? (
				<Card className={cardClasses.root}>
					<CardMedia
						className={cardClasses.media}
						image={member.avatar_url}
						title={member.login}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{member.name}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{member.bio}
						</Typography>
					</CardContent>
					<CardActions>
						<Button onClick={history.goBack} size="small" color="primary">
							Back to list page
						</Button>
					</CardActions>
				</Card>
			) : (
				<CircularProgress />
			)}
		</div>
	);
};
