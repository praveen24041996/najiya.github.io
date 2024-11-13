<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Engineering Project - Modern Solutions</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <h1>Modern Solutions for a Better Tomorrow</h1>
    </header>
    
    <div class="scrolling-message">
        <p>Hi Nurjaha! Welcome to Modern Solutions for a Better Tomorrow. Explore our projects and learn more about our initiatives.</p>
    </div>

    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#innovate4good"><i class="fas fa-lightbulb"></i> Innovate4Good</a></li>
            <li><a href="#mindcare"><i class="fas fa-brain"></i> MindCare</a></li>
            <li><a href="#moveeasy"><i class="fas fa-bus"></i> MoveEasy</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="login.html">Login</a></li>
        </ul>
    </nav>

    <main>
        <section id="home">
            <h2>Welcome to Modern Solutions</h2>
            <p>We are dedicated to addressing critical challenges through innovative solutions in various fields. Explore our projects to learn more about our impact and initiatives.</p>
        </section>

        <section id="innovate4good">
            <h2>Innovate4Good</h2>
            <div class="section-content">
                <img src="image1.jpg" alt="Innovate4Good Image">
                <div class="text">
                    <p>Innovating for a Brighter Future in Slums.</p>
                    <a href="https://forumias.com/blog/slum-redevelopment-in-india-explained-pointwise/#:~:text=National%20Slum%20Development%20Programme%20(NSDP,It%20was%20introduced%20in%202001." target="_blank">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </section>

        <section id="mindcare">
            <h2>MindCare</h2>
            <div class="section-content">
                <img src="image2.jpg" alt="MindCare Image">
                <div class="text">
                    <p>Caring for Mental Well-being.</p>
                    <a href="https://medical.maharashtra.gov.in/show_content.php?lang=1&level=1&ls_id=161&lid=229#:~:text=For%20effective%20implementation%20of%20the,and%20Medicines%2C%20Government%20of%20Maharashtra." target="_blank">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </section>

        <section id="moveeasy">
            <h2>MoveEasy</h2>
            <div class="section-content">
                <img src="image3.jpg" alt="MoveEasy Image">
                <div class="text">
                    <p>Solutions for Urban Mobility Challenges.</p>
                    <a href="https://www.tandfonline.com/doi/full/10.1080/21650020.2023.2212745" target="_blank">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </section>

        <section id="about">
            <h2>About Us</h2>
            <p>Our mission is to create impactful solutions that address pressing challenges in our communities. We believe in leveraging technology and innovative thinking to drive positive change and improve lives. Our vision is a world where our projects lead to sustainable and scalable benefits for everyone.</p>
        </section>

        <section id="contact">
            <h2>Contact Us</h2>
            <p>If you have any questions or would like to collaborate, please reach out to us:</p>
            <ul>
                <li>Email: <a href="mailto:Bagwannajiya@gmail.com">Bagwannajiya@gmail.com</a></li>
                <li>Phone: +91-9512345673</li>
                <li>Address: 123 Innovation Street, Tech City, TX, 12345</li>
            </ul>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Modern Solutions. All rights reserved.</p>
    </footer>

    <!-- Check if the user is logged in by verifying if the OTP exists in sessionStorage -->
    <script>
        // If OTP is not found in sessionStorage, redirect the user to the login page
        if (!sessionStorage.getItem('otp')) {
            window.location.href = 'login.html';  // Redirect to login page if not logged in
        }
    </script>
</body>
</html>
