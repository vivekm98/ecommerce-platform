import React, { useEffect } from "react";
import axiosInstance from "../axiosInstance";
const Dashboard = () => {
	useEffect(() => {
		const fetchData = async () => {
			try {
        const response = await axiosInstance.get('/protected-view/')
        console.log(response.data)

			} catch (error) {
				console.error("error fet", error);
			}
		};
    fetchData();
	},[]);
	return <div>Dashboard</div>;
};

export default Dashboard;
