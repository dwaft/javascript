function panggilObect() {
    var mobil = {
        type : 'sedan',
        harga: 200000,
        warna : 'putih',
        tahun: [2001,2002,2003]
    }

    console.log( "data = "+mobil)
    console.log("harga mobil = "+mobil.harga)
    console.log( "data tahun = "+mobil)
    console.log( "mobil tahun "+mobil.tahun[2])
}

panggilObect()