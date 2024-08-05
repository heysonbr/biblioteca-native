// libreria.js
export function fetchBooks(setBooks) {
  const myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    ".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxPyw2blOqGC2qAvXN1GG31imCj3zfSW5sm1831NuhTv7qQ8YqZM_Y622dDA_zZb-4Honssc2cAYdRYi0kps04oKXVY4UTQ3vdaqbgCiPSrzTEKtTXEHdOZHYtPOPVfdGyXnjcY7RoEhydC97RBgf8LBtr4dPGskzP91O8H-HihumwZn-uqcZSeX2YKdtAFO1vGRQbvHGVQjcZ0gTDPfIYVPqKwE2IiSlJ4WEdM_LfYPbaG8fIfg0ATQNKD53YIAjppEu-OFIouTfLqCN5TsQFCK7RCL7RDNl71_F7PV5zdZo6dzZIBkDgrvBaqyw3m1x2GS1fJJFJrf73YbZRCJ5glWWZRELhwoT5YGBk9Zq5TnFTM74hzAXT956LdtOtXaUgn9f3tB2xkGHaz9I6cyA1cAy1aSnHF0_NFN3BPOG_f04KZCin4E2ermhwwH_2FGadHHJH3a9wHcwmDLpUeSrqFrf80D_xxHQRlo7p4U7cxVkJkcBu10ePiNKeOcPYmy90FPDqW5gmvuNScHwSYcfo4WhiKY5nbKPvkteBq5kMHHhRbL0rmJUYBYEGyNxjUZHOveFUIVS0Qc4R6lZ8GUjDF7KMf-bUas78ha-xiYFgUsMsOmVNoT9KXmv2SdzoOy8QL0-O7g8L5lVBZC9OaTiTxzNidffZeVuZJQ6RYpk6h2QGo3UXPvsocVQu262sVDeWb3ZUVEecV0qOCeq2pVzmWoRkde07EeTe7zJaHI5yAHRIyNOpGvM0VN-anz89AROuV9hW3BgP_1Pqt5aGgfoTxCnMxHFXfrUEnBq-YSaDT-ofdlnSQUzDDaopzVvyuhiubprpM1xg3kxJbW3AInwXg61co_uKNyR_rYYGEv3jkVROWZmK6tmW8EOPsTIj9ATPs"
  );

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://wkj70ncv-3000.uks1.devtunnels.ms/books", requestOptions)
    .then((response) => response.json())
    .then((result) => setBooks(result))
    .catch((error) => console.error(error));
}

export function fetchBookInfo(id, setBookInfo) {
  const myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    ".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxMzdc4CGwN5fBxeYjWfUiJyywReKZWEsRCSpOSYHR_7-utWdChtlmevTVZ2a1QzTBDofwxAS6OtbG7mijifWNmAPqVA5iOB7A_3SiecBFScmgxDbXZMqQuWwXR0ywSz3iZE0hCJ_rpxPzMqBHYQZOuujToM-xWIvHd5kmKZoBGrsgPw9sOKGb1I8sTP2_G2UI67QW-JHs4_VfqRNbBPuB3U3KCTAr4w1BckpTJ3HbKsDNVfJLWfbaCPau72ENIP1zLEiLV_GXj_9CzixJtCHMG4LWTL4vaOmAU40O0WvN3upAd0toNV5z6ADEUh2v3tZVjGJMnKDeqcm8Lz7Lj1nTd4W7_oKTBWyqzWCpnaFJ7khqwa-UIfRbtlrm58TLFfIVo1lQ5Gl8sKIkTLChmsIaTOgAAWSCYHwszUXIlHqQWTBFDKG_EN-fOpHTjhqzXubg5JHFQxlA4Bd6kg0k8DpHMDu-6wa3MnOAVuXdXk55yv47sS7Ae-yNjVdnxzVHmoZZkv7RRvgBCCDBfN8CGkGuwBGz81PZR-jxzt1rsqGvutnTGvubwX0aYgZ8BXa0sCKTPvSTUFOJMVCu-39yWU9PPcuy0m-7ktAOmARrD8s-595DoRkI1lm4kIrtEjn4g3RVfNHRliyNGI-wC3Gi6eaNEPGfb-_fSYX9hc2hae3-KWAzPlV9rKcxNAUvgOhewrRkf55tk-WSB4VuktOov1b_SCjtosgAWVb-yLCl5Jb84uJjjQvrU2qRNdPcALTIHiVuh36baySW8ikipXj7pqjZ3LavaO50x6m0ICfTQjqDxyhfVHb5WWMMqiTjdYi47psa523ms4pcmYTe354i9c2524d2-5xUcn7JEfe69Ydnz7wxkgbneUtcOM8NZ4KIFTUc0"
  );

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`https://wkj70ncv-3000.uks1.devtunnels.ms/books/${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => setBookInfo(result))
    .catch((error) => console.error(error));
}

export function deleteBook(id) {
  const myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    ".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxPFxhhum44kdh5n1saiO7aCpjutYYA-23xf4osNoJ3LGVj-vf5HMV3CC6jAwMseTeo3aJk3UmO6gimtYbfdJ5UfQHG81I9mlWP8mZeBN3tMLEoJF_3mwVyItKqHst8oIHTUV8v9gNcyPNSJOdIa1Zd9vqvLm9xvGDq5HveL5MES_jHylhJ33LWmomu-uU5669Kst9ue7hishCMgednjD6-2oXUHEPv2PxQH36FIw2c1YnM_t_MMpyf2jLQMJqaWPqX7IXh53NLSfnOaH8tVOdU9RqzBOcjRsabbvGhtvfPqzPd3HV32YT_miRufnSs-j-pT9lh9sspqGLuUeBq56arAr9Zaa8840rfkcUG2fR_aMIfbUR9jwnr-wFcwNdRxFiyqQipRVazE893nD-t_stCFIfe-uLaDf22EKWIzxuI0qOUnPS5pPEwkjhYWC0ZXjjXhGa33QeNcjkHQvqA_MPfDB2xG7jtZCcs33MaamsaTDwqS-GlqlogpZqTEYo5PIa71SSjT8KlyiJCZ-Qq1i2duFXP9Rff7GAZ2kkMl9naAFO3GcrJ3JhwltWEwzpNlHB2zVYGT_XJhDNkd3ckr6in2Wo0twxA4WYjLIqquZ-VZ_R0CBuWI6xyYFOmKhnPnSgT7kI50vAhGou8fUgwVntinLRgvxmT_Vm7fIOiG3Nxpbx8fKAx5CT7nZZ5acr1PRxirPx31JNFhYUB0NcrtyVRsInAfUeXqiDPP9RVDEfucNVyHINsVaCWG4PyV4O9IPFovcMqcklWkGQ3DSZQ6d_kxYxjrx8EU4wy297CAXLx97LuBfDXTsJpn74OB648EkwCZsFLhC4eaeR5z4y32xqI2_6JwbDbajFEni8mAnkZIbxDwDMPJRDq853mWy3kQ_4o"
  );

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    `https://wkj70ncv-3000.uks1.devtunnels.ms/books/${id}`,
    requestOptions
  )
    .then((response) => {
      if (response.ok) {
        return fetch("https://wkj70ncv-3000.uks1.devtunnels.ms/books", {
          headers: myHeaders,
        });
      } else {
        throw new Error("Error deleting book");
      }
    })
    .then((response) => response.json());
}
