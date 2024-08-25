import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFetchData = (fetchFunction, dependencies = []) => {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Ensure fetchFunction is invoked to get the thunk action
                await dispatch(fetchFunction()).unwrap(); // Call fetchFunction as a function to dispatch the returned action
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData(); // Call fetchData to trigger the fetch action
    }, [dispatch, ...dependencies]); // Dependencies include dispatch and the user-supplied dependencies

    // Replace `state.posts` with the specific slice you need
    return useSelector((state) => state); // Adjust this to select the appropriate slice of state
};

export default useFetchData;
