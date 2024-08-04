// libreria.js
export function fetchBooks(setBooks) {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", ".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxPyw2blOqGC2qAvXN1GG31imCj3zfSW5sm1831NuhTv7qQ8YqZM_Y622dDA_zZb-4Honssc2cAYdRYi0kps04oKXVY4UTQ3vdaqbgCiPSrzTEKtTXEHdOZHYtPOPVfdGyXnjcY7RoEhydC97RBgf8LBtr4dPGskzP91O8H-HihumwZn-uqcZSeX2YKdtAFO1vGRQbvHGVQjcZ0gTDPfIYVPqKwE2IiSlJ4WEdM_LfYPbaG8fIfg0ATQNKD53YIAjppEu-OFIouTfLqCN5TsQFCK7RCL7RDNl71_F7PV5zdZo6dzZIBkDgrvBaqyw3m1x2GS1fJJFJrf73YbZRCJ5glWWZRELhwoT5YGBk9Zq5TnFTM74hzAXT956LdtOtXaUgn9f3tB2xkGHaz9I6cyA1cAy1aSnHF0_NFN3BPOG_f04KZCin4E2ermhwwH_2FGadHHJH3a9wHcwmDLpUeSrqFrf80D_xxHQRlo7p4U7cxVkJkcBu10ePiNKeOcPYmy90FPDqW5gmvuNScHwSYcfo4WhiKY5nbKPvkteBq5kMHHhRbL0rmJUYBYEGyNxjUZHOveFUIVS0Qc4R6lZ8GUjDF7KMf-bUas78ha-xiYFgUsMsOmVNoT9KXmv2SdzoOy8QL0-O7g8L5lVBZC9OaTiTxzNidffZeVuZJQ6RYpk6h2QGo3UXPvsocVQu262sVDeWb3ZUVEecV0qOCeq2pVzmWoRkde07EeTe7zJaHI5yAHRIyNOpGvM0VN-anz89AROuV9hW3BgP_1Pqt5aGgfoTxCnMxHFXfrUEnBq-YSaDT-ofdlnSQUzDDaopzVvyuhiubprpM1xg3kxJbW3AInwXg61co_uKNyR_rYYGEv3jkVROWZmK6tmW8EOPsTIj9ATPs");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("https://wkj70ncv-3000.uks1.devtunnels.ms/books", requestOptions)
      .then((response) => response.json())
      .then((result) => setBooks(result))
      .catch((error) => console.error(error));
}