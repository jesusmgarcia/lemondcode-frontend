import React from "react";

interface OrgContextType {
	orgName: string;
	setOrgName: (value: string) => void;
}

export const OrgContext = React.createContext<OrgContextType>({
	orgName: "lemoncode",
	setOrgName: (value) => {}
});

export const OrgContextProvider = (props) => {
	const [orgName, setOrgName] = React.useState("lemoncode");

	return (
		<OrgContext.Provider value={{ orgName, setOrgName }}>
			{props.children}
		</OrgContext.Provider>
	);
};
