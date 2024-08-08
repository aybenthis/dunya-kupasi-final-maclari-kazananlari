const kazananlar = (fifadata) => {
  // Final maçlarını filtrele
  const finalMaclari = fifadata.filter((mac) => mac.Stage === 'Final');

  // Kazanan takımları belirle ve listeyi oluştur
  const kazananlarListesi = [];

  finalMaclari.forEach((mac) => {
    // Kazanan takımın adını belirle
    let kazananTakim;
    if (mac['Home Team Goals'] > mac['Away Team Goals']) {
      kazananTakim = mac['Home Team Name'];
    } else {
      kazananTakim = mac['Away Team Name'];
    }

    // Yıl ve kazanan takımın adını içeren string oluştur
    kazananlarListesi.push(`${mac.Year} kazananı ${kazananTakim}`);
  });

  // Sonucu döndür
  return kazananlarListesi;
};
