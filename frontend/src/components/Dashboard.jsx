import React, { useEffect } from "react";
import axiosInstance from "../axiosinstance";
import Adds from "./Adds";
import Products from "./Products";
import Category from "./Category";

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


	return (
		<>
		 <Adds />
		 <Category />
		</>
	)
		
	       
};

export default Dashboard;
