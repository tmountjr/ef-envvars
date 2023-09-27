module.exports = {
  name: "ef-envvar",
  origins: [
    {
      name: "origin",
      override_host_header: "httpbin.org",
      hosts: [
        {
          location: "httpbin.org",
        },
      ],

      tls_verify: {
        use_sni: true,
        sni_hint_and_strict_san_check: "httpbin.org",
      },
    },
  ],
};
