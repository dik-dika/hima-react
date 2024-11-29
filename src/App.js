import React from "react";
import "./App.css";
import himatif from "./img/himatif.png";
import struktur from "./img/struktur.jpeg";
import mabim from "./img/mabim.jpg";
import makrab from "./img/makrab.jpg";
import workshop from "./img/workshop.jpg";
import seminar from "./img/seminar.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fs-3 d-flex align-items-center">
            <img src={himatif} alt="Himatif Logo" width="50" height="50" className="d-inline-block me-2" />
            HIMATIF
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#proker">
                  Proker
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="home-section bg-img d-flex align-items-center justify-content-center">
        <div>
          <h2>HIMPUNAN MAHASISWA TEKNIK INFORMATIKA</h2>
          <p className="fs-4">
            Himatif Unas Pasim adalah Himpunan Mahasiswa Teknik Informatika Universitas Nasional Pasim, yang berfokus pada pengembangan akademik, keterampilan, dan soft skills mahasiswa di bidang teknologi informasi. Organisasi ini
            bertujuan untuk menjadi wadah komunikasi dan kolaborasi antar mahasiswa, serta menjembatani antara mahasiswa dan dosen.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section section-background text-center ">
        <div className="row">
          <div className="col-md-6">
            <h2>VISI</h2>
            <p className="visi-section fs-3">
              Menjadikan Himpunan Mahasiswa Teknik Informatika Universitas Nasional Pasim sebagai organisasi mahasiswa yang bermanfaat bagi mahasiswa Teknik Informatika Universitas Nasional Pasim dalam meningkatkan kualitas prestasi
              akademik dan non-akademik agar terwujudnya mahasiswa yang berkualitas
            </p>
          </div>
          <div className="col-md-6">
            <h2>MISI</h2>
            <ul className="fs-3 text-start">
              <li>Memberikan wadah kepada mahasiswa Teknik Informatika dalam bidang teknologi</li>
              <li>Memperkuat ikatan antar pengurus HIMATIF sehingga menghasilkan kinerja yang profesional dan efektif</li>
              <li>Meningkatkan kesadaran mahasiswa Teknik Informatika dalam mengikuti kegiatan mahasiswa</li>
              <li>Menjadi wadah aspirasi mahasiswa Teknik Informatika</li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <h2>Struktur Organisasi</h2>
            <img src={struktur} alt="struktur" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>Keanggotaan</h2>
            <ul className="fs-3">
              <p>CHANDRA MUHAMMAD R (KAHIM)</p>
              <p>IMAM SATRIO NEGORO (WAKIL KAHIM)</p>
              <p>IKHWAN KUSUMAH (SEKRETARIS)</p>
              <p>JIDDAN MUJADDID (BENDAHARA)</p>
              <p>M.DZIKRI ApFIANSYAH (KADIV MEDIA & INFORMASI)</p>
              <p>BAYU RIZKI (KADIV MINAT & BAKAT)</p>
              <p>SATRIA WICAKSONO (KADIV HUBUNGAN MASYARAKAT)</p>
            </ul>
          </div>
        </div>
      </section>

      {/* Proker Section */}
      <section id="proker" className="proker-section section-background text-center">
        <h2>PROKER</h2>
        <div className="row mt-4">
          <div className="col-md-6">
            <img src={workshop} alt="Workshop" className=" proker-img" />
            <h3>WORKSHOP</h3>
            <p className=" workshop-section fs-5">
              Workshop adalah pertemuan kelompok yang bertujuan untuk melakukan kegiatan intensif terkait topik atau proyek tertentu. Workshop dapat berupa diskusi, latihan, studi kasus, atau simulasi.
            </p>
          </div>
          <div className="col-md-6">
            <img src={seminar} alt="Seminar" className="proker-img" />
            <h3>SEMINAR</h3>
            <p className="fs-5">Seminar adalah pertemuan ilmiah untuk membahas topik tertentu di bawah pimpinan seorang ahli. Tujuannya adalah untuk mendapatkan keputusan bersama mengenai masalah yang diperbincangkan.</p>
          </div>
          <div className="col-md-6 mt-4">
            <img src={mabim} alt="MABIM" className=" proker-img" />
            <h3>MABIM</h3>
            <p className="mabim-section fs-5">
              Masa Bimbingan (MABIM) adalah kegiatan yang dilakukan untuk menyambut mahasiswa baru, memperkenalkan lingkungan akademik, dan memberikan bekal pengetahuan dan keterampilan untuk menjalani studi.
            </p>
          </div>
          <div className="col-md-6 mt-4">
            <img src={makrab} alt="MAKRAB" className=" proker-img" />
            <h3>MAKRAB</h3>
            <p className="fs-5">Makrab (MALAM KEAKRABAN) sendiri merupakan kegiatan untuk mempererat tali silaturahmi antara mahasiswa dari sejumlah angkatan, mulai dari mahasiswa baru hingga senior.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section section-background text-center">
        <h2>CONTACT</h2>
        <p className="text-center">Feel free to reach out via email or connect with us on social media.</p>
        <div className="contact-info">
          <p>
            <strong>Phone:</strong> +62 123456
          </p>
        </div>
        <div className="social-icons">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNvMfKMrxwsJzcjWVrBZjzFhbGNstzklRGCKqzlXpshCsCMTmpfXCSdPpLJqRJCckgNhbV" target="_blank">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/himatif.pasim" target="_blank">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.tiktok.com/@himatif.pasim" target="_blank">
            <i className="fab fa-tiktok fa-2x"></i>
          </a>
        </div>
        <form className="container contact-form mt-4">
          <input type="text" className="form-control mb-3" placeholder="Your Name" required />
          <input type="email" className="form-control mb-3" placeholder="Your Email" required />
          <textarea className="form-control mb-3" rows="4" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
