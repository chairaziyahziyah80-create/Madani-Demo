/* =====================================================
   config.js — Pengaturan koneksi Supabase (satu tempat)
   Ganti URL / ANON di file ini saja; semua halaman ikut berubah.

   Cara pakai di halaman HTML (urutan wajib):
     <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js"></script>
     <script src="config.js"></script>
     <script> ... db.from("tabel").select() ... </script>
   ===================================================== */
(function (w) {
  "use strict";

  var SUPABASE_URL  = "https://cvrelxdqmxavyqiyaoqe.supabase.co/rest/v1/";
  var SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2cmVseGRxbXhhdnlxaXlhb3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM2MTUwMDAsImV4cCI6MjEwOTE5MTAwMH0.z4tLUgwAANMrVYAdoAqY_nO2cQ499Qcu3kKDwtIWsPI";

  // supabase-js butuh alamat dasar proyek, tanpa "/rest/v1/" di belakangnya.
  var BASE_URL = String(SUPABASE_URL).trim()
    .replace(/\/rest\/v1\/?$/i, "")
    .replace(/\/+$/, "");

  w.SB_URL  = BASE_URL;                        // https://xxxx.supabase.co
  w.SB_KEY  = SUPABASE_ANON;                   // anon public key
  w.SB_REST = BASE_URL + "/rest/v1/";          // untuk fetch() manual bila perlu
  w.SB_STORAGE_PUBLIC = BASE_URL + "/storage/v1/object/public/"; // + bucket/path

  // Klien siap pakai: gunakan  db.from("tabel")...  di halaman mana pun.
  if (w.supabase && typeof w.supabase.createClient === "function") {
    w.db = w.supabase.createClient(w.SB_URL, w.SB_KEY);
  } else {
    console.error("config.js: library supabase-js belum dimuat. Pasang <script> supabase-js SEBELUM config.js.");
  }
})(window);
