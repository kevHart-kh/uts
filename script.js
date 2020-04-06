var semua_jumlah = [1];
var semua_waktu = [1];
counter = 0;

$( document ).on( "mobileinit", function() {
 
    // We want popups to cover the page behind them with a dark background
    $.mobile.popup.prototype.options.overlayTheme = "b";
   
    // Set a namespace for jQuery Mobile data attributes
    $.mobile.ns = "jqm-";
  });

function input_pinjaman(){
    var jumlah = document.getElementById("jumlah_pinjaman");
    jumlah = parseInt(jumlah.value)
    document.getElementById("hasil-jumlah").innerHTML=jumlah;

    var waktu = document.getElementById("waktu_pinjaman");
    waktu = parseInt(waktu.value);
    document.getElementById("hasil-waktu").innerHTML = waktu;
    
    var bunga;
    if (waktu<=6) {
        bunga=2;
    }else if(waktu<=12){
        bunga=1.5;
    }else{
        bunga=1;
    }

    if (counter == 0) {
        semua_jumlah[0]=jumlah;
        semua_waktu[0]=waktu;
        counter++;
    }else{
        // semua_jumlah=push(jumlah);
        // semua_waktu=push(waktu);

        semua_jumlah[counter]=jumlah;
        semua_waktu[counter]=waktu;
        counter++;
    }

    var hasil = jumlah+(jumlah*bunga/100*waktu);
    
    
    var stringHasil=""+jumlah+" + ( " + jumlah +" * " + bunga + "% * " + waktu + " ) = " + hasil;
    
    document.getElementById("hasil-pengembalian").innerHTML = stringHasil;


    document.getElementById("jumlah_pinjaman").value="";;
    document.getElementById("waktu_pinjaman").value="6";
    


    update_listPinjaman();
}

function update_listPinjaman(){
    var list = document.getElementById("list-pinjaman");

    var html="";

    for (let index = 0; index < counter; index++) {
        html += '<div data-role="collapsible"><h3>pinjaman:'+ semua_jumlah[index] + 'waktu:' + semua_waktu[index] +'</h3><ul data-role=listview>'

        var waktu = semua_waktu[index];
        var jumlah = semua_jumlah[index];
        var bunga;
        if (waktu<=6) {
            bunga=2;
        }else if(waktu<=12){
            bunga=1.5;
        }else{
            bunga=1;
        }

        var hasil = jumlah+(jumlah*bunga/100*waktu);
        
        
        var stringHasil=""+jumlah+" + ( " + jumlah +" * " + bunga + "% * " + waktu + " ) = " + hasil;
        
        html += stringHasil;
        html += '</ul></div>'    
    }

    list.innerHTML=html;
    
}