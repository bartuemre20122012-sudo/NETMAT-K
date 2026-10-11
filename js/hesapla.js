<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LGS Net & Puan Hesaplama | NetMatik</title>
    <!-- FontAwesome İkonları -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Ana CSS Dosyamız -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <!-- Üst Header / Navigasyon Barı -->
    <header class="navbar">
        <div class="logo">
            <a href="İndex.html">
                <img src="./assets/Gemini_Generated_Image_-Photoroom.png" alt="NetMatik Logo" class="netmatik-logo" style="height: 50px; vertical-align: middle;">
            </a>
        </div>
        <nav class="nav-links">
            <a href="İndex.html"><i class="fa-solid fa-house"></i> Ana Sayfa</a>
            <a href="lgspuan.html" class="active"><i class="fa-solid fa-calculator"></i> LGS Net Hesapla</a>
        </nav>
    </header>

    <!-- Ana Konteyner -->
    <main class="container">
        
        <!-- Üst Başlık & Geri Dön Butonu -->
        <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
            <div>
                <span style="color: var(--primary-color, #38bdf8); font-weight: 700; font-size: 0.9rem; text-transform: uppercase;">
                    <i class="fa-solid fa-chart-line"></i> MEB Uyumlu Hesaplama Motoru
                </span>
                <h1 style="font-size: 2.2rem; font-weight: 800; color: var(--text-color, #f8fafc); margin-top: 5px;">
                    LGS Net & Puan Hesaplama (Hedef 500 Tam Puan!)
                </h1>
            </div>
            <a href="İndex.html" class="nav-btn" style="text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                <i class="fa-solid fa-arrow-left"></i> Ana Sayfaya Dön
            </a>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 25px;">
            
            <!-- SOL TARAF: DERS İNPUTLARI -->
            <div style="display: flex; flex-direction: column; gap: 15px;">
                
                <!-- Türkçe (20 Soru) -->
                <div class="ders-kart" style="padding: 15px 20px; border-left: 5px solid #ec4899; cursor: default;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <strong style="color: #ec4899; font-size: 1.1rem;"><i class="fa-solid fa-book-open-reader"></i> Türkçe (20 Soru)</strong>
                        <span id="tr_net_txt" style="color: #cbd5e1; font-weight: 700; font-size: 0.95rem;">Net: 0.00</span>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>
                            <label style="font-size: 0.8rem; color: #94a3b8; display: block; margin-bottom: 3px;">Doğru</label>
                            <input type="number" id="tr_d" min="0" max="20" value="0" oninput="hesaplaLGS()" style="width: 100%; padding: 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(15, 23, 42, 0.8); color: #fff; font-weight: 700;">
                        </div>
                        <div>
                            <label style="font-size: 0.8rem; color: #94a3b8; display: block; margin-bottom: 3px;">Yanlış</label>
                            <input type="number" id="tr_y" min="0" max="20" value="0" oninput="hesaplaLGS()" style="width: 100%; padding: 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(15, 23, 42, 0.8); color: #fff; font-weight: 700;">
                        </div>
                    </div>
                </div>

                <!-- Matematik (20 Soru) -->
                <div class="ders-kart" style="padding: 15px 20px; border-left: 5px solid #38bdf8; cursor: default;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <strong style="color: #38bdf8; font-size: 1.1rem;"><i class="fa-solid fa-calculator"></i> Matematik (20 Soru)</strong>
                        <span id="mat_net_txt" style="color: #cbd5e1; font-weight: 700; font-size: 0.95rem;">Net: 0.00</span>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>
                            <label style="font-size: 0.8rem; color: #94a3b8; display: block; margin-bottom: 3px;">Doğru</label>
                            <input type="number" id="mat_d" min="0" max="20" value="0" oninput="hesaplaLGS()" style="width: 100%; padding: 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(15, 23, 42, 0.8); color: #fff; font-weight: 700;">
                        </div>
                        <div>
                            <label style="font-size: 0.8rem; color: #94a3b8; display: block; margin-bottom: 3px;">Yanlış</label>
                            <input type="number" id="mat_y" min="0" max="20" value="0" oninput="hesaplaLGS()" style="width: 100%; padding: 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(15, 23, 42, 0.8); color: #fff; font-weight: 700;">
                        </div>
                    </div>
                </div>

                <!-- Fen Bilimleri (20 Soru) -->
                <div class="ders-kart" style="padding: 15px 20px; border-left: 5px solid #22c55e; cursor: default;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <strong style="color: #22c55e; font-size: 1.1rem;"><i class="fa-solid fa-flask"></i> Fen Bilimleri (20 Soru)</strong>
                        <span id="fen_net_txt" style="color: #cbd5e1; font-weight: 700; font-size: 0.95rem;">Net: 0.00</span>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>
                            <label style="font-size: 0.8rem; color: #94a3b8; display: block; margin-bottom: 3px;">Doğru</label>
                            <input type="number" id="fen_d" min="0" max="20" value="0" oninput="hesaplaLGS()" style="width: 100%; padding: 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(15, 23, 42, 0.8); color: #fff; font-weight: 700;">
                        </div>
                        <div>
                            <label style="font-size: 0.8rem; color: #94a3b8; display: block; margin-bottom: 3px;">Yanlış</label>
                            <input type="number" id="fen_y" min="0" max="20" value="0" oninput="hesaplaLGS()" style="width: 100%; padding: 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(15, 23, 42, 0.8); color: #fff; font-weight: 700;">
                        </div>
                    </div>
                </div>

                <!-- T.C. İnkılap Tarihi (10 Soru) -->
                <div class="ders-kart" style="padding: 15px 20px; border-left: 5px solid #f59e0b; cursor: default;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <strong style="color: #f59e0b; font-size: 1.1rem;"><i class="fa-solid fa-landmark"></i> İnkılap Tarihi (10 Soru)</strong>
                        <span id="ink_net_txt" style="color: #cbd5e1; font-weight: 700; font-size: 0.95rem;">Net: 0.00</span>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>
                            <label style="font-size: 0.8rem; color: #94a3b8; display: block; margin-bottom: 3px;">Doğru</label>
                            <input type="number" id="ink_d" min="0" max="10" value="0" oninput="hesaplaLGS()" style="width: 100%; padding: 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(15, 23, 42, 0.8); color: #fff; font-weight: 700;">
                        </div>
                        <div>
                            <label style="font-size: 0.8rem; color: #94a3b8; display: block; margin-bottom: 3px;">Yanlış</label>
                            <input type="number" id="ink_y" min="0" max="10" value="0" oninput="hesaplaLGS()" style="width: 100%; padding: 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(15, 23, 42, 0.8); color: #fff; font-weight: 700;">
                        </div>
                    </div>
                </div>

                <!-- Din Kültürü (10 Soru) -->
                <div class="ders-kart" style="padding: 15px 20px; border-left: 5px solid #ef4444; cursor: default;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <strong style="color: #ef4444; font-size: 1.1rem;"><i class="fa-solid fa-mosque"></i> Din Kültürü (10 Soru)</strong>
                        <span id="din_net_txt" style="color: #cbd5e1; font-weight: 700; font-size: 0.95rem;">Net: 0.00</span>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>
                            <label style="font-size: 0.8rem; color: #94a3b8; display: block; margin-bottom: 3px;">Doğru</label>
                            <input type="number" id="din_d" min="0" max="10" value="0" oninput="hesaplaLGS()" style="width: 100%; padding: 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(15, 23, 42, 0.8); color: #fff; font-weight: 700;">
                        </div>
                        <div>
                            <label style="font-size: 0.8rem; color: #94a3b8; display: block; margin-bottom: 3px;">Yanlış</label>
                            <input type="number" id="din_y" min="0" max="10" value="0" oninput="hesaplaLGS()" style="width: 100%; padding: 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(15, 23, 42, 0.8); color: #fff; font-weight: 700;">
                        </div>
                    </div>
                </div>

                <!-- İngilizce (10 Soru) -->
                <div class="ders-kart" style="padding: 15px 20px; border-left: 5px solid #a855f7; cursor: default;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <strong style="color: #a855f7; font-size: 1.1rem;"><i class="fa-solid fa-language"></i> İngilizce (10 Soru)</strong>
                        <span id="ing_net_txt" style="color: #cbd5e1; font-weight: 700; font-size: 0.95rem;">Net: 0.00</span>
                    </div>