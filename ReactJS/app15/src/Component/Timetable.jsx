export const Timetable=()=>{
    return  <div>

    <table border={5}>
        <thead>
            <tr>
                <th rowSpan={2}>Day</th>
                <th colSpan={8}>Time</th>
            </tr>
            <tr>
                <th>9-30To10.30</th>
                <th>10.30To11.20</th>
                <th>11.20to11.30</th>
                <th>11.30To12.30</th>
                <th>12.30To1.30</th>
                <th>1.30To2.30</th>
                <th>2.30To3.15</th>
                <th>3.15To4.00</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>MonDay</td>
                <td>Maths</td>
                <td>Physics</td>
                <td rowSpan={6}>Short Break</td>
                <td>Chemistry</td>
                <td>Computer</td>
                <td rowSpan={6}>Lanch Break</td>
                <td colSpan={2}>.....Computer......</td>
            </tr>
            <tr>
                <td>Tueday</td>
                <td>Physics</td>
                <td>Maths</td>
                <td>Chemistry</td>
                <td>English</td>
                <td colSpan={2}>...Physics Lab....</td>
               
            </tr>
            <tr>
                <td>WedNesday</td>
                <td>Computer</td>
                <td>Physics</td>
                <td>Maths</td>
                <td>kanada</td>
                <td colSpan={2}>....Chemistry...</td>
            </tr>
            <tr>
                <td>Thruday</td>
                <td>Maths</td>
                <td>Kanada</td>
                <td>Physics</td>
                <td>English</td>
                <td colSpan={2}>...Compurer...</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>English</td>
                <td>Maths</td>
                <td>Physics</td>
                <td>Computer</td>
                <td>Chemistry</td>
                <td>Kanada</td>
            </tr>
            <tr>
                <td>saturdayday</td>
                <td>Maths</td>
                <td>English</td>
                <td>Chemistry</td>
                <td>Computer</td>
                <td colSpan={2}>...SpecalClass....</td>
            </tr>
        </tbody>
    </table>
</div>
}