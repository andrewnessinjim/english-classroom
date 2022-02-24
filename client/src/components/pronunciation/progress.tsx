import "./progress.scss"

import {useContext} from "react";
import { gql, useQuery } from "@apollo/client";
import { UserContext } from "../../context";
import {useParams} from "react-router-dom";

const FETCH_PROGRESS_OP = gql`
query FetchProgress($teacherId: String!, $studentId: String!) {
  progress(teacherId: $teacherId, studentId: $studentId) {
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
            {!averageHistory.data || !averageHistory.data.progress || !averageHistory.data.progress.length
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
                    {averageHistory.data.progress.map(
                        (   averageHistoryItem: {lastActive: any, totalPracticed:number, average:number},
                            index:number) => 
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