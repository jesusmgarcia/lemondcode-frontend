import React from "react";

interface OrgContextType {
	orgName: string;
	setOrgName: (value: string) => void;
	currentPage: number;
	setCurrentPage: (value: number) => void;
	totalPages: number;
	setTotalPages: (value: number) => void;
}

export const OrgContext = React.createContext<OrgContextType>({
	orgName: "lemoncode",
	setOrgName: (value) => {},
	currentPage: 1,
	setCurrentPage: (value) => {},
	totalPages: 1,
	setTotalPages: (value) => {}
});

export const OrgContextProvider = (props) => {
	const [orgName, setOrgName] = React.useState("lemoncode");
	const [currentPage, setCurrentPage] = React.useState(1);
	const [totalPages, setTotalPages] = React.useState(1);

	return (
		<OrgContext.Provider
			value={{
				orgName,
				setOrgName,
				currentPage,
				setCurrentPage,
				totalPages,
				setTotalPages
			}}
		>
			{props.children}
		</OrgContext.Provider>
	);
};
