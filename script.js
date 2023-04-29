function cekShalat() {
    let waktuShalat = {
      subuh: '04:00',
      dzuhur: '12:00',
      ashar: '15:00',
      maghrib: '18:00',
      isya: '19:30'
    };
    
    let now = new Date();
    let jam = now.getHours();
    let menit = now.getMinutes();
    let waktuSekarang = jam + ':' + menit;
    
    let shalatSekarang;
    
    if(waktuSekarang >= waktuShalat.subuh && waktuSekarang < waktuShalat.dzuhur) {
      shalatSekarang = 'Subuh';
    } else if(waktuSekarang >= waktuShalat.dzuhur && waktuSekarang < waktuShalat.ashar) {
      shalatSekarang = 'Dzuhur';
    } else if(waktuSekarang >= waktuShalat.ashar && waktuSekarang < waktuShalat.maghrib) {
      shalatSekarang = 'Ashar';
    } else if(waktuSekarang >= waktuShalat.maghrib && waktuSekarang < waktuShalat.isya) {
      shalatSekarang = 'Maghrib';
    } else {
      shalatSekarang = 'Isya';
    }
    
    let konfirmasiShalat = confirm('Sudah shalat ' + shalatSekarang + ' sesuai waktunya?');
    
    if(konfirmasiShalat) {
      alert('Alhamdulillah, semoga Allah menerima shalat kita.');
    } else {
      alert('Ingatlah bahwa shalat adalah kewajiban bagi setiap muslim. Mari segera melaksanakan shalat ' + shalatSekarang + ' sesuai waktunya.');
    }
  }
  