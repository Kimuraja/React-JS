import './CustomerReward.css'

const CustomerReward = ({ customer }) => {
    const { name, totalPoints, monthlyRewardPoints } = customer;

    const sortedMonthlyRewardPoints = Object.entries(monthlyRewardPoints).sort(
        ([monthA], [monthB]) => monthB.localeCompare(monthA)
    );

    return (
        <div className="textarea">
            <h3 className="heading">{name}:</h3>
            <ol className="ordered-list">
                {sortedMonthlyRewardPoints.map(([month, points]) => (
                    <li key={month}>
                        <span id='month'>{month}:</span> {points ? <span id='points'>{points} Points</span> : <>No reward in this month</>}
                    </li>
                ))}
            </ol>
            <p className='total-points'>Total Points: <span id='points'>{totalPoints}</span></p>
        </div>
    );
};

export default CustomerReward;
