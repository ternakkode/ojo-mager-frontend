function sucessAlertWithTimer(message, redirectUrl) {
    return Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: message,
        showConfirmButton: false,
        timer: 1000
    });
}

function sucessAlertWithConfirmationButton(message) {
    return Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: message,
    });
}

function unexpectedErrorAlert() {
    return Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: 'Terjadi kegagalan, silahkan coba lagi nanti',
    });
}

function customErrorAlert(message) {
    return Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: message,
    });
}

function customErrorAlertWithTimer(message) {
    return Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: message,
        showConfirmButton: false,
        timer: 1000
    });
}