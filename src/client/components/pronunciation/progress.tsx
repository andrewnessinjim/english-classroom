import "./progress.scss"

import React, {useContext} from "react";
import { gql, useQuery } from "@apollo/client";
import { UserContext } from "../../context";
import {Navigate, useParams} from "react-router-dom";

const FETCH_PROGRESS_OP = gql`
query FetchProgress($teacherId: String!, $studentId: String!) {
  fetchProgress(teacherId: $teacherId, studentId: $studentId) {
    average
    lastActive
    totalPracticed
  }
}
`

function Progress(){
    const user = useContext(UserContext);
    let params = useParams();
    const {studentId} = params;
    const teacherId = user.id;

    const averageHistory = useQuery(FETCH_PROGRESS_OP, {
        variables: {studentId, teacherId}
    });
    return (
        <section className="progress-section">
            {!averageHistory.data || !averageHistory.data.fetchProgress || !averageHistory.data.fetchProgress.length
             ? <p>No progress recorded yet!</p>
             : 
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Words Practiced</th>
                        <th>Average Rating</th>
                    </tr>
                 </thead>
                 <tbody>
                    {averageHistory.data.fetchProgress.map((averageHistoryItem, index) => 
                        <tr key={index}>
                            <td>{averageHistoryItem.lastActive}</td>
                            <td>{averageHistoryItem.totalPracticed}</td>
                            <td>{averageHistoryItem.average && averageHistoryItem.average.toFixed(2)}</td>
                        </tr>
                    )}
                 </tbody>
            </table>}
        </section>
    );
}

export default Progress;