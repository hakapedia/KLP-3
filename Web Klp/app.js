// app.js

// Objek yang menyimpan konten untuk setiap halaman
const pages = {
    home: `
        <div class="hero">
            <h2>Selamat Datang di Website Kelompok 3</h2>
        </div>
        <section>
            <h2>Selamat Datang</h2>
            <p>Ini adalah halaman utama kelompok kami. Jelajahi halaman lain untuk mengetahui lebih banyak tentang kami!</p>
        </section>
    `,
    about: `
        <section>
            <h2>Tentang Kami</h2>
            <p>
            Pemrograman Web Dasar<br>
            Kelompok 3:<br> 
            Ria    (202243501051)<br>
            Aisyah (202243501054)<br>
            Alma   (202243501058)<br>
            Rifqi  (202243501059)<br>
            Abdul  (202243501091)<br>
            Bella  (202243501097)<br>
            Fadhil (202243501105)
            </p>
        </section>
    `,
    register: `
        <section id="register">
            <h2>Registrasi Keanggotaan</h2>
            <form id="registrationForm">
                <label for="name">Nama:</label>
                <input type="text" id="name" required><br><br>

                <label for="email">Email:</label>
                <input type="email" id="email" required><br><br>

                <label for="interest">Minat:</label>
                <input type="text" id="interest" required><br><br>

                <button type="submit">Daftar</button>
            </form>
            <h3>Partisipan Terdaftar:</h3>
            <ul id="memberList"></ul>
        </section>
    `,
    feedback: `
        <section id="feedback">
            <h2>Kritik dan Saran:</h2>
            <form id="feedbackForm">
                <label for="username">Nama:</label>
                <input type="text" id="username" required><br><br>

                <label for="rating">Rating (1-5):</label>
                <input type="number" id="rating" min="1" max="5" required><br><br>

                <label for="feedbackMessage">Komentar:</label><br>
                <textarea id="feedbackMessage" rows="4" required></textarea><br><br>

                <button type="submit">Kirim Feedback</button>
            </form>

            <h3>Feedback yang Diterima:</h3>
            <ul id="feedbackList"></ul>
            <h3>Rata-Rata Rating:</h3>
            <p id="averageRating">Belum ada rating.</p>
        </section>
    `,
    contact: `
        <section>
            <h2>Kontak Kami</h2>
            <p>Email: info@kelompok3.com</p>
            <p>Telepon: +62 895 4010 53438</p>
        </section>
    `,
};

function loadPage(page) {
    const content = document.getElementById("content");
    content.innerHTML = pages[page];

    // Jalankan kembali event listener jika halaman baru dimuat
    if (page === "register") {
        document.getElementById("registrationForm").addEventListener("submit", function (event) {
            event.preventDefault(); // Mencegah refresh halaman
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const interest = document.getElementById("interest").value;

            const memberList = document.getElementById("memberList");
            const newMember = document.createElement("li");
            newMember.textContent = `${name} (${email}) - Minat: ${interest}`;
            memberList.appendChild(newMember);

            document.getElementById("registrationForm").reset();
        });
    }

    if (page === "feedback") {
        let totalRating = 0;
        let feedbackCount = 0;

        document.getElementById("feedbackForm").addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const rating = parseInt(document.getElementById("rating").value);
            const feedbackMessage = document.getElementById("feedbackMessage").value;

            const feedbackList = document.getElementById("feedbackList");
            const newFeedback = document.createElement("li");
            newFeedback.innerHTML = `<strong>${username}</strong> memberikan rating <strong>${rating}</strong>: ${feedbackMessage}`;
            feedbackList.appendChild(newFeedback);

            totalRating += rating;
            feedbackCount++;
            const averageRating = (totalRating / feedbackCount).toFixed(1);
            document.getElementById("averageRating").textContent = `Rata-Rata Rating: ${averageRating}`;

            document.getElementById("feedbackForm").reset();
        });
    }
}
