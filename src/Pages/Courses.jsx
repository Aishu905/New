import Header from "../Component/Header/Header"
const Courses = () => {
    return(
        <div>
            <Header/>
            <h1>our academic programs</h1>
            <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
            <h1>Discover campus life</h1>
            <video>
                <source src="https://vck.codewonders.in/assets/college-tour-FAmcnyfF.mp4"type="video/mp4"/>
            </video>
            <h1>undergraduate programs</h1>
            <ul>
                <h3>Bachelor of science (B.s.c)</h3>
                <li>Computer Science (3 years)</li>
                <li>Information Technology (3 years)</li>
                <li>Biotechnology (3 years)</li>
            </ul>
            <h3>Bachelor of Commerce (B.Com)</h3>
            <ul>
             <li>Accounting & Finance (3 years)</li>
            <li>Banking & Insurance (3 years)</li>
            </ul>
            <h3>Bachelor of Arts (B.A.)</h3>
            <ul>
                <li>English Literature (3 years)</li>
              <li>  liPsychology (3 years)</li>
            </ul>
            <h1>Postgraduate Programs (PG)</h1>
            <ul>
                <li>Master of Science (M.Sc.)</li>
            </ul>
            <ul>
                <li>Computer Science (2 years)</li>
                <li>Information Technology (2 years)</li>
            </ul>
            <ul>
                <li>Master of Commerce (M.Com) (2 years)</li>
                <li>Master of Arts (M.A.) (2 years)</li>
            </ul>
            <table>
            <thead>Programs details and fee structure (Annual)</thead>
            <tr>
                <th>program type</th>
                <th>course name</th>
                <th>duration</th>
                <th>annual fee</th>
                <th>eligibility</th>
            </tr>
            <tbody>
            <tr>
            <td>ug</td>
            <td>B.s.c computer science</td>
            <td>3 years</td>
            <td>₹ 85,000</td>
            <td>10+2 with PCM (50%)</td>
            </tr>
            <tr>
               <td>ug</td> 
               <td>B.Com. Accounting & Finance</td>
               <td>3 years</td>
               <td>₹ 70,000</td>
               <td>10+2 Commerce (45%)</td>
            </tr>
            <tr>
                <td>ug</td>
                <td>M.Sc. Information Technology</td>
                <td>2 years</td>
                <td>₹ 95,000</td>
                <td>B.Sc. IT/CS (50%)</td>
            </tr>
            </tbody>
             </table>
            <h1>Specialized & Vocational Courses</h1>
            <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.
            Have questions about a specific course?
            </p>
            <button>inquire about courses</button>
            
        </div>
    )
}
export default Courses;