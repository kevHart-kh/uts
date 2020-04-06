var semua_jumlah = [1];
var semua_waktu = [1];
counter = 0;


function input_pinjaman(){
    var jumlah = document.getElementById("jumlah_pinjaman");
    jumlah = parseInt(jumlah.value)
    document.getElementById("hasil-jumlah").innerHTML=jumlah;

    var bunga=2;

    var waktu = document.getElementById("waktu_pinjaman");
    waktu = parseInt(waktu.value);
    document.getElementById("hasil-waktu").innerHTML = waktu;

    if (counter == 0) {
        semua_jumlah[0]=jumlah;
        semua_waktu[0]=waktu;
        counter++;
    }

    var hasil = jumlah+(jumlah*bunga/100*waktu);
    
    
    var stringHasil=""+jumlah+" + ( " + jumlah +" * " + bunga + "% * " + waktu + " ) = " + hasil;
    
    document.getElementById("hasil-pengembalian").innerHTML = stringHasil;

}