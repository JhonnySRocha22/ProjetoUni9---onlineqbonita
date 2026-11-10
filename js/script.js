var IM = {
  al1: "img/al1.jpg",
  al2: "img/al2.jpg",
  cr1: "img/cr1.jpg",
  cr2: "img/cr2.jpg",
  gl1: "img/gl1.jpg",
  gl2: "img/gl2.jpg",
  god1: "img/god1.jpg",
  li1: "img/li1.jpg",
  li2: "img/li2.jpg",
  pa1: "img/pa1.jpg",
  po1: "img/po1.jpg",
  po2: "img/po2.jpg",
  rf: "img/rf.jpg",
  rg1: "img/rg1.jpg",
  rg2: "img/rg2.jpg",
  sa1: "img/sa1.jpg",
  sa2: "img/sa2.jpg",
  sf: "img/sf.jpg",
  sh1: "img/sh1.jpg",
  sh2: "img/sh2.jpg",
  tb1: "img/tb1.jpg",
  tb2: "img/tb2.jpg",
  tr: "img/tr.jpg",
  wl1: "img/wl1.jpg",
  wl2: "img/wl2.jpg",
};
var LOGO = "img/logo.png";

function iniciarQBonita() {
  /* ===== DADOS DA LOJA: troque aqui ===== */
  var CONFIG = {
    whatsapp: "5511948603326",
    instagram: "https://www.instagram.com/onlineqbonita_",
    endereco: "Rua João Teodoro, 1122, Loja 134, Shopping New Mall, São Paulo",
  };
  /* ===== PEÇAS =====
   id: nome interno único | cat: "c" = Camisetas, "p" = Calças | preco: use ponto (49.9)
   tam: tamanhos | cores: cores (devem existir na lista SW abaixo) | imgs: nomes das fotos (nomes da lista de fotos, no final deste arquivo)
   A 1ª foto de imgs aparece no card e no banner; as demais aparecem como miniaturas. */
  var P = [
    {
      id: "paete",
      cat: "p",
      nome: "Calça paetê",
      preco: 99.9,
      tam: ["P", "M"],
      cores: ["Prata"],
      imgs: ["pa1"],
      desc: "Calça de paetê. Disponível somente na cor prata.",
    },
    {
      id: "wild",
      cat: "c",
      nome: "T-shirt bordada Wild Love",
      preco: 52.9,
      tam: ["P"],
      cores: ["Branco", "Preto"],
      imgs: ["wl1", "wl2"],
      desc: "T-shirt bordada em malha de algodão. Somente tamanho P.",
    },
    {
      id: "god",
      cat: "c",
      nome: "T-shirt bordada coração",
      preco: 20,
      tam: ["P", "M", "G", "GG"],
      cores: ["Branco"],
      imgs: ["god1"],
      desc: "T-shirt bordada coração em tecido viscolycra.",
    },
    {
      id: "trop",
      cat: "c",
      nome: "Camisetão Tropical",
      preco: 20,
      tam: ["P", "M", "G"],
      cores: ["Rosa", "Amarelo"],
      imgs: ["tr"],
      desc: "Camisetão em algodão com detalhe de renda.",
    },
    {
      id: "summer",
      cat: "c",
      nome: "Camisetão Summer Flowers",
      preco: 20,
      tam: ["P", "M", "G"],
      cores: ["Amarelo"],
      imgs: ["sf"],
      desc: "Camisetão em algodão com detalhe de renda.",
    },
    {
      id: "rosaf",
      cat: "c",
      nome: "Camisetão Rosa Flore",
      preco: 20,
      tam: ["P", "M", "G"],
      cores: ["Rosa", "Amarelo"],
      imgs: ["rf"],
      desc: "Camisetão em algodão com detalhe de renda.",
    },
    {
      id: "rega",
      cat: "c",
      nome: "Regatão strass",
      preco: 49.9,
      tam: ["P", "M", "G"],
      cores: ["Preto", "Branco"],
      imgs: ["rg1", "rg2"],
      desc: "Regatão com detalhes em strass.",
    },
    {
      id: "gola",
      cat: "c",
      nome: "Blusa gola alta tule dedinho",
      preco: 20,
      tam: ["P", "M", "G"],
      cores: ["Preto", "Marrom"],
      imgs: ["gl1", "gl2"],
      desc: "Blusa de gola alta em tule, com dedinho.",
    },
    {
      id: "tule",
      cat: "c",
      nome: "Blusa tule básica",
      preco: 20,
      tam: ["P", "M", "G"],
      cores: ["Preto", "Marrom"],
      imgs: ["tb1", "tb2"],
      desc: "Blusa básica em tule.",
    },
    {
      id: "list",
      cat: "c",
      nome: "T-shirt listrada",
      preco: 29.9,
      tam: ["P", "M", "G"],
      cores: ["Preto e branco"],
      imgs: ["li1", "li2"],
      desc: "T-shirt listrada em tecido viscolycra.",
    },
    {
      id: "poa",
      cat: "c",
      nome: "T-shirt algodão poá",
      preco: 20,
      tam: ["P", "M", "G"],
      cores: ["Preto", "Off", "Rosa"],
      imgs: ["po1", "po2"],
      desc: "T-shirt de algodão em estampa poá.",
    },
    {
      id: "camisa",
      cat: "c",
      nome: "Camisa renda",
      preco: 69.9,
      tam: ["P", "M"],
      cores: ["Preto", "Off", "Marrom"],
      imgs: ["cr1", "cr2"],
      desc: "Camisa de renda.",
    },
    {
      id: "short",
      cat: "p",
      nome: "Shorts detalhe renda",
      preco: 49.9,
      tam: ["P", "M", "G"],
      cores: ["Off", "Preto"],
      imgs: ["sh1", "sh2"],
      desc: "Shorts em tecido moletinho com detalhe de renda.",
    },
    {
      id: "alad",
      cat: "p",
      nome: "Calça aladim renda",
      preco: 74.9,
      tam: ["P", "M"],
      cores: ["Preto", "Off", "Marrom"],
      imgs: ["al1", "al2"],
      desc: "Calça aladim de renda.",
    },
    {
      id: "saia",
      cat: "p",
      nome: "Saia renda fenda",
      preco: 69.9,
      tam: ["P", "M"],
      cores: ["Marsala"],
      imgs: ["sa1", "sa2"],
      desc: "Saia de renda com fenda. Disponível na cor marsala.",
    },
  ];

  /* ===== BOLINHAS DE COR: nome da cor : cor mostrada ===== */
  var SW = {
    Preto: "#15110f",
    Branco: "#fff",
    Off: "#efe7d4",
    Rosa: "#f4b6cf",
    Amarelo: "#f5ec9a",
    Marrom: "#6b3f2e",
    Prata: "linear-gradient(135deg,#e8e8ee,#9a9aa5)",
    Marsala: "#7b1f3a",
    "Preto e branco": "repeating-linear-gradient(0deg,#111 0 3px,#fff 3px 6px)",
  };
  /* ===== FAIXAS DO FILTRO DE PREÇO: [texto, mínimo, máximo] ===== */
  var R = [
      ["Até R$ 30", 0, 30],
      ["R$ 31 a R$ 60", 30.01, 60],
      ["Acima de R$ 60", 60.01, 1e9],
    ],
    ORD = ["P", "M", "G", "GG"];
  var root = document.getElementById("qb"),
    $ = function (i) {
      return document.getElementById(i);
    };
  var brl = function (v) {
    return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };
  document.querySelectorAll("#qb .lg").forEach(function (i) {
    i.src = LOGO;
  });
  var f = { cat: "", cor: [], tam: [], preco: [] },
    cart = [],
    m = null;
  try {
    cart = JSON.parse(localStorage.getItem("qbonita-cart") || "[]");
  } catch (e) {}
  var save = function () {
    try {
      localStorage.setItem("qbonita-cart", JSON.stringify(cart));
    } catch (e) {}
  };
  var byId = function (id) {
    return P.filter(function (p) {
      return p.id === id;
    })[0];
  };
  var dot = function (c) {
    return '<span class="dot" style="background:' + SW[c] + '"></span>';
  };
  var io =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          function (es) {
            es.forEach(function (e) {
              if (e.isIntersecting) {
                e.target.classList.add("on");
                io.unobserve(e.target);
              }
            });
          },
          { threshold: 0.12 },
        )
      : null;
  function reveal() {
    root.querySelectorAll(".rv:not(.on)").forEach(function (c) {
      io ? io.observe(c) : c.classList.add("on");
    });
  }
  function ok(p) {
    if (f.cat && p.cat !== f.cat) return false;
    if (
      f.cor.length &&
      !p.cores.some(function (c) {
        return f.cor.indexOf(c) > -1;
      })
    )
      return false;
    if (
      f.tam.length &&
      !p.tam.some(function (t) {
        return f.tam.indexOf(t) > -1;
      })
    )
      return false;
    if (
      f.preco.length &&
      !f.preco.some(function (i) {
        return p.preco >= R[i][1] && p.preco <= R[i][2];
      })
    )
      return false;
    return true;
  }
  function opts() {
    var base = P.filter(function (p) {
        return p.cat === f.cat;
      }),
      co = [],
      ta = [];
    base.forEach(function (p) {
      p.cores.forEach(function (c) {
        if (co.indexOf(c) < 0) co.push(c);
      });
      p.tam.forEach(function (t) {
        if (ta.indexOf(t) < 0) ta.push(t);
      });
    });
    ta.sort(function (a, b) {
      return ORD.indexOf(a) - ORD.indexOf(b);
    });
    return {
      co: co,
      ta: ta,
      pr: R.map(function (r, i) {
        return i;
      }).filter(function (i) {
        return base.some(function (p) {
          return p.preco >= R[i][1] && p.preco <= R[i][2];
        });
      }),
    };
  }
  function chip(k, v, label, on) {
    return (
      '<button class="chip" data-f="' +
      k +
      '" data-v="' +
      v +
      '" aria-pressed="' +
      on +
      '">' +
      label +
      "</button>"
    );
  }
  function filtros() {
    var h = "";
    if (f.cat) {
      var o = opts();
      h +=
        '<div class="fg"><h4>Cores</h4><div class="chips">' +
        o.co
          .map(function (c) {
            return chip("cor", c, dot(c) + c, f.cor.indexOf(c) > -1);
          })
          .join("") +
        "</div></div>";
      h +=
        '<div class="fg"><h4>Tamanhos</h4><div class="chips">' +
        o.ta
          .map(function (t) {
            return chip("tam", t, t, f.tam.indexOf(t) > -1);
          })
          .join("") +
        "</div></div>";
      h +=
        '<div class="fg"><h4>Preços</h4><div class="chips">' +
        o.pr
          .map(function (i) {
            return chip(
              "preco",
              i,
              R[i][0],
              f.preco.indexOf(String(i)) > -1 || f.preco.indexOf(i) > -1,
            );
          })
          .join("") +
        "</div></div>";
    }
    $("qb-fl").innerHTML = h;
    root.querySelectorAll(".cat").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.cat === f.cat ? "true" : "false");
    });
  }
  function lista() {
    var out = P.filter(ok);
    $("qb-n").textContent = out.length + (out.length === 1 ? " peça" : " peças");
    $("qb-grid").innerHTML = out.length
      ? out
          .map(function (p, i) {
            return (
              '<article class="card rv" style="transition-delay:' +
              (i % 4) * 70 +
              'ms" data-open="' +
              p.id +
              '" tabindex="0"><div class="foto"><img loading="lazy" src="' +
              IM[p.imgs[0]] +
              '" alt="' +
              p.nome +
              '"><span class="eye">Toque para ver</span></div><div class="cb"><h3>' +
              p.nome +
              '</h3><div class="pr">' +
              brl(p.preco) +
              '</div><div class="tams">Tam.: ' +
              p.tam.join(" · ") +
              '</div><div class="dots">' +
              p.cores.map(dot).join("") +
              '</div><button type="button" class="esc" data-open="' +
              p.id +
              '">Escolher cor e tamanho</button></div></article>'
            );
          })
          .join("")
      : '<p class="vazio">Nenhuma peça com esses filtros.</p>';
    reveal();
  }
  function trilho() {
    $("qb-trk").innerHTML = P.map(function (p) {
      return (
        '<div class="sl" data-open="' +
        p.id +
        '"><img loading="lazy" src="' +
        IM[p.imgs[0]] +
        '" alt="' +
        p.nome +
        '"><div><b>' +
        p.nome +
        "</b>" +
        brl(p.preco) +
        "</div></div>"
      );
    }).join("");
  }
  function modal(id, img) {
    var p = byId(id);
    if (!m || m.p !== p) m = { p: p, t: "", c: "", q: 1, i: 0 };
    if (img !== undefined) m.i = img;
    var th =
      p.imgs.length > 1
        ? '<div class="th">' +
          p.imgs
            .map(function (k, i) {
              return (
                '<button data-img="' +
                i +
                '" class="' +
                (i === m.i ? "on" : "") +
                '"><img src="' +
                IM[k] +
                '" alt=""></button>'
              );
            })
            .join("") +
          "</div>"
        : "";
    var cc = p.cores.length
      ? '<div><div class="chips" role="group" aria-label="Cor"><b style="width:100%;font-size:14px">Cor</b>' +
        p.cores
          .map(function (c) {
            return (
              '<button class="chip" data-mc="' +
              c +
              '" aria-pressed="' +
              (m.c === c) +
              '">' +
              dot(c) +
              c +
              "</button>"
            );
          })
          .join("") +
        "</div></div>"
      : "";
    var tt =
      '<div class="chips" role="group" aria-label="Tamanho"><b style="width:100%;font-size:14px">Tamanho</b>' +
      p.tam
        .map(function (t) {
          return (
            '<button class="chip" data-mt="' +
            t +
            '" aria-pressed="' +
            (m.t === t) +
            '">' +
            t +
            "</button>"
          );
        })
        .join("") +
      "</div>";
    var pronto = (!p.cores.length || m.c) && m.t;
    $("qb-mod").innerHTML =
      '<button class="x" data-cl="1" aria-label="Fechar">&times;</button><div class="gal"><div class="gm"><img src="' +
      IM[p.imgs[m.i]] +
      '" alt="' +
      p.nome +
      '"></div>' +
      th +
      '</div><div class="md"><h2>' +
      p.nome +
      '</h2><div class="pr">' +
      brl(p.preco) +
      "</div><p>" +
      p.desc +
      "</p>" +
      cc +
      tt +
      '<div class="qt"><button data-mq="-1" aria-label="Menos">−</button><span>' +
      m.q +
      '</span><button data-mq="1" aria-label="Mais">+</button></div><div class="hint">' +
      (pronto
        ? ""
        : "Escolha " + (p.cores.length && !m.c ? "a cor e " : "") + "o tamanho para comprar.") +
      '</div><button class="buy" data-buy="1"' +
      (pronto ? "" : " disabled") +
      ">Adicionar ao carrinho</button></div>";
    $("qb-mod").classList.add("on");
    $("qb-ov").classList.add("on");
  }
  function fechar() {
    m = null;
    ["qb-mod", "qb-ov", "qb-gv"].forEach(function (i) {
      $(i).classList.remove("on");
    });
  }
  function total() {
    return cart.reduce(function (a, i) {
      return a + i.q * i.preco;
    }, 0);
  }
  function qtd() {
    return cart.reduce(function (a, i) {
      return a + i.q;
    }, 0);
  }
  function desenha() {
    var n = qtd();
    $("qb-cn").textContent = n;
    $("qb-ft").textContent = brl(total());
    $("qb-tt").textContent = brl(total());
    $("qb-send").disabled = !n;
    $("qb-min").textContent = n
      ? n < 3
        ? "Faltam " +
          (3 - n) +
          " peça(s) para o mínimo da loja física (3) e " +
          (6 - n) +
          " para envio (6)."
        : n < 6
          ? "Mínimo da loja física atingido. Faltam " + (6 - n) + " peça(s) para envio (6)."
          : "Mínimo para envio atingido."
      : "";
    $("qb-its").innerHTML = cart.length
      ? cart
          .map(function (i, x) {
            return (
              '<div class="it"><img src="' +
              IM[i.img] +
              '" alt=""><div><h4>' +
              i.nome +
              "</h4><small>" +
              (i.c ? i.c + " · " : "") +
              "Tam. " +
              i.t +
              '</small><div class="qt"><button data-ci="' +
              x +
              '" data-d="-1">−</button><span>' +
              i.q +
              '</span><button data-ci="' +
              x +
              '" data-d="1">+</button></div><button class="rm" data-rm="' +
              x +
              '">Remover</button></div><div class="sb">' +
              brl(i.preco * i.q) +
              "</div></div>"
            );
          })
          .join("")
      : '<p class="vazio" style="padding:40px 0">Seu carrinho está vazio.</p>';
  }
  function enviar() {
    if (!cart.length) return;
    var nm = $("qb-nome").value.trim(),
      ob = $("qb-obs").value.trim();
    var t = "*Novo pedido – QBonita*\n" + (nm ? "Cliente: " + nm + "\n" : "") + "\n";
    cart.forEach(function (i, n) {
      t +=
        n +
        1 +
        ") *" +
        i.nome +
        "*\n" +
        (i.c ? "Cor: " + i.c + "\n" : "") +
        "Tamanho: " +
        i.t +
        "\nQuantidade: " +
        i.q +
        " × " +
        brl(i.preco) +
        " = " +
        brl(i.q * i.preco) +
        "\n\n";
    });
    if (ob) t += "Observações: " + ob + "\n\n";
    t +=
      "*Total de peças:* " +
      qtd() +
      "\n*Valor a pagar:* " +
      brl(total()) +
      "\n\nAguardo a confirmação. Obrigada!";
    window.open(
      "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(t),
      "_blank",
      "noopener",
    );
  }
  root.addEventListener("click", function (e) {
    var t = e.target.closest("button,[data-open],a");
    if (!t) return;
    var d = t.dataset;
    if (d.open) {
      modal(d.open, 0);
    } else if (d.cat) {
      f = { cat: f.cat === d.cat ? "" : d.cat, cor: [], tam: [], preco: [] };
      filtros();
      lista();
    } else if (d.f) {
      var a = f[d.f],
        v = d.f === "preco" ? +d.v : d.v,
        i = a.indexOf(v);
      i > -1 ? a.splice(i, 1) : a.push(v);
      filtros();
      lista();
    } else if (d.lim) {
      f = { cat: "", cor: [], tam: [], preco: [] };
      filtros();
      lista();
    } else if (d.sc) {
      var k = $("qb-trk");
      k.scrollBy({ left: d.sc * (k.clientWidth * 0.8), behavior: "smooth" });
    } else if (d.img !== undefined) {
      modal(m.p.id, +d.img);
    } else if (d.mc) {
      m.c = d.mc;
      modal(m.p.id);
    } else if (d.mt) {
      m.t = d.mt;
      modal(m.p.id);
    } else if (d.mq) {
      m.q = Math.max(1, m.q + +d.mq);
      modal(m.p.id);
    } else if (d.cl || t.id === "qb-ov") {
      fechar();
    } else if (d.fc) {
      $("qb-gv").classList.remove("on");
      $("qb-ov").classList.remove("on");
    } else if (d.buy) {
      var p = m.p,
        x = cart.filter(function (i) {
          return i.id === p.id && i.t === m.t && i.c === m.c;
        })[0];
      x
        ? (x.q += m.q)
        : cart.push({
            id: p.id,
            nome: p.nome,
            img: p.imgs[0],
            preco: p.preco,
            t: m.t,
            c: m.c,
            q: m.q,
          });
      save();
      desenha();
      fechar();
      var b = $("qb-fab");
      b.classList.remove("pop");
      void b.offsetWidth;
      b.classList.add("pop");
    } else if (d.ci !== undefined) {
      cart[+d.ci].q += +d.d;
      if (cart[+d.ci].q < 1) cart.splice(+d.ci, 1);
      save();
      desenha();
    } else if (d.rm !== undefined) {
      cart.splice(+d.rm, 1);
      save();
      desenha();
    } else if (t.id === "qb-fab") {
      $("qb-gv").classList.add("on");
      $("qb-ov").classList.add("on");
    } else if (t.id === "qb-send") {
      enviar();
    }
  });
  $("qb-ov").addEventListener("click", fechar);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") fechar();
    if (e.key === "Enter" && e.target.dataset && e.target.dataset.open)
      modal(e.target.dataset.open, 0);
  });
  $("qb-maps").href =
    "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.endereco);
  $("qb-wa").href =
    "https://wa.me/" +
    CONFIG.whatsapp +
    "?text=" +
    encodeURIComponent("Olá! Vim pelo catálogo da QBonita.");
  $("qb-ig").href = CONFIG.instagram;
  var auto = setInterval(function () {
    var k = $("qb-trk");
    if (k.matches(":hover")) return;
    if (k.scrollLeft + k.clientWidth >= k.scrollWidth - 4)
      k.scrollTo({ left: 0, behavior: "smooth" });
    else k.scrollBy({ left: k.clientWidth * 0.6, behavior: "smooth" });
  }, 4200);
  /* ===== PEÇAS DO BANNER: [foto, id da peça] ===== */
  var HS = [
      ["pa1", "paete"],
      ["wl1", "wild"],
      ["rg1", "rega"],
      ["al1", "alad"],
      ["sa1", "saia"],
      ["gl1", "gola"],
      ["po1", "poa"],
    ],
    hm = $("qb-hm"),
    hd = $("qb-hdots"),
    hi = 0,
    ht;
  HS.forEach(function (h, i) {
    var g = document.createElement("img");
    g.src = IM[h[0]];
    g.alt = "";
    hm.insertBefore(g, hm.firstChild);
    var b = document.createElement("button");
    b.setAttribute("aria-label", "Peça " + (i + 1));
    b.dataset.hd = i;
    hd.appendChild(b);
  });
  function hero(i) {
    hi = (i + HS.length) % HS.length;
    var im = hm.querySelectorAll("img"),
      bs = hd.children,
      p = byId(HS[hi][1]);
    for (var k = 0; k < im.length; k++) {
      im[k].className = HS.length - 1 - k === hi ? "on" : "";
    }
    for (var j = 0; j < bs.length; j++) bs[j].className = j === hi ? "on" : "";
    hm.dataset.open = p.id;
    $("qb-hn").textContent = p.nome;
    $("qb-hp").textContent = brl(p.preco);
  }
  function hrun() {
    clearInterval(ht);
    ht = setInterval(function () {
      hero(hi + 1);
    }, 4500);
  }
  hd.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (b) {
      hero(+b.dataset.hd);
      hrun();
    }
  });
  $("qb-s1").src = IM["al2"];
  $("qb-s2").src = IM["po2"];
  hero(0);
  hrun();
  filtros();
  lista();
  trilho();
  desenha();
  reveal();
}

iniciarQBonita();
