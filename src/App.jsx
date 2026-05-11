import bakeryLogo from "./assets/bakery-logo.png";
import heroCheesecakeJars from "./assets/hero-cheesecake-jars.png";
import productChocoDulce from "./assets/product-choco-dulce.png";
import productTartaLimon from "./assets/product-tarta-limon.png";
import historiaImage from "./assets/historia.png";
import lastCtaImage from "./assets/lastcta.png";

const heroPillPosition = {
  x: "translate-x-0",
  y: "translate-y-4"
};

const signatureTextPosition = {
  x: "0rem",
  y: "0rem"
};

const heroImageControls = {
  frameHeight: "h-[36vh] min-h-[280px] max-h-[430px] sm:h-[440px] lg:h-[520px] lg:max-h-[520px]",
  frameWidth: "w-full",
  frameMargin: "mb-0",
  frameRadius: "rounded-b-[3rem] sm:rounded-[3rem]",
  imageWidth: "100%",
  imageHeight: "100%",
  imageLeft: "0%",
  imageTop: "-8%",
  zoom: 1,
  panX: "0px",
  panY: "0px"
};

const signatureImageControls = {
  featured: {
    frameHeight: "h-[10rem] lg:h-[24rem]",
    imageWidth: "100%",
    imageHeight: "100%",
    imageLeft: "0%",
    imageTop: "0%",
    zoom: 1,
    panX: "0px",
    panY: "0px"
  },
  choco: {
    frameHeight: "h-16 lg:h-44",
    imageWidth: "112%",
    imageHeight: "112%",
    imageLeft: "-6%",
    imageTop: "-6%",
    zoom: 1,
    panX: "0px",
    panY: "0px"
  },
  lemon: {
    frameHeight: "h-16 lg:h-44",
    imageWidth: "112%",
    imageHeight: "112%",
    imageLeft: "-6%",
    imageTop: "-6%",
    zoom: 1,
    panX: "0px",
    panY: "0px"
  }
};

const bakes = [
  {
    title: "Cheesecake de frutilla",
    description: "Suave, cremoso y fresco, con base crocante y fresas seleccionadas.",
    price: "$6.200",
    image: heroCheesecakeJars,
    featured: true,
    badge: "El favorito",
    imageControl: "featured"
  },
  {
    title: "Choco dulce de leche",
    description: "Capas de chocolate y dulce de leche sobre base crocante.",
    price: "$6.200",
    image: productChocoDulce,
    imageControl: "choco"
  },
  {
    title: "Tarta de limón",
    description: "Fresca, equilibrada y terminada con merengue suave.",
    price: "$5.900",
    image: productTartaLimon,
    imageControl: "lemon"
  }
];

const reasons = [
  {
    title: "Pequeños lotes, mejor resultado",
    copy: "Menos volumen, más control y una textura que se siente recién hecha."
  },
  {
    title: "Ingredientes que sí se notan",
    copy: "Buenas cremas, fruta real y bases honestas para un sabor más limpio."
  },
  {
    title: "Hecho para compartir o no",
    copy: "Porque hay cosas que se disfrutan mejor acompañadas... y otras que no se negocian."
  }
];

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-cherry/10 bg-cream/90 backdrop-blur">
      <div className="section-shell flex min-h-16 items-center justify-between gap-3 py-2">
        <a href="#" className="flex items-center gap-2" aria-label="Inicio de Aurelia Bakery">
          <img src={bakeryLogo} alt="" className="h-10 w-10 object-contain" aria-hidden="true" />
          <span className="font-display text-lg font-extrabold leading-[0.9] text-cherry">
            Aurelia Bakery
          </span>
        </a>
        <a href="#order" className="primary-button min-h-10 min-w-28 px-4 text-sm">
          Ubícanos
        </a>
      </div>
    </header>
  );
}

function SoftSectionBridge() {
  return (
    <div
      className="mx-auto h-7 max-w-4xl bg-gradient-to-b from-[rgba(61,36,27,0.08)] to-transparent blur-sm"
      aria-hidden="true"
    />
  );
}

function HeroImageBottomWave() {
  const wavePath =
    "M0 58C138 44 244 72 386 59C532 46 641 28 789 48C939 68 1043 84 1197 61C1308 45 1380 46 1440 55V120H0V58Z";
  const waveEdgePath =
    "M0 58C138 44 244 72 386 59C532 46 641 28 789 48C939 68 1043 84 1197 61C1308 45 1380 46 1440 55";

  return (
    <svg
      className="absolute inset-x-0 bottom-[-1px] h-14 w-full text-cream sm:h-16"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path d={wavePath} fill="currentColor" />
      <path
        d={waveEdgePath}
        fill="none"
        stroke="#F6D8C9"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrushStroke({ className = "" }) {
  return (
    <svg
      viewBox="0 0 180 18"
      className={`text-[#F6D8C9] ${className}`}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M5 11C28 6 47 7 70 9C96 11 119 4 145 6C158 7 169 9 175 8"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 13C48 11 73 14 103 11C124 9 146 10 164 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
    </svg>
  );
}

function AureliaIngredientIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 600 600" className={className} fill="currentColor" aria-hidden="true">
      <g transform="translate(0 600) scale(0.1 -0.1)">
        <path d="M3139 5203c-65-72-187-404-228-617-11-54-21-99-23-101-2-3-33 5-69 15-138 43-277 62-491 67-113 3-218 3-232-1-14-3-33-18-42-32-25-37-7-64 70-110 36-21 66-41 66-45 0-3-32-10-72-14-123-12-293-60-402-115-111-55-150-83-161-118-9-31 37-75 103-98 29-10 52-21 52-24 0-3-32-36-71-75-84-84-144-171-204-298-83-173-111-355-94-586 56-745 594-1721 1154-2096 306-205 574-231 867-84 609 303 1235 1356 1297 2181 18 240-12 417-103 603-62 126-108 191-203 287-37 37-65 69-62 71 2 2 27 12 54 22 65 24 109 67 100 97-25 82-338 211-563 233-40 4-72 11-72 14 0 4 29 24 65 45 90 52 103 79 60 121-24 25-27 25-190 25-181 0-302-11-440-39-49-10-91-17-93-16-2 2 10 35 27 74 39 92 139 266 208 361 64 90 64 105-5 169-64 60-141 94-222 99-54 3-68 1-81-15zm159-129c29-14 52-31 52-37 0-7-30-57-66-112-123-187-230-439-256-600-16-94-28-104-28-21 0 82 24 253 50 356 47 185 151 440 179 440 10 0 40-12 69-26zm-699-649c101-18 205-43 248-61l33-14v-89c0-102 9-116 88-136 50-13 124-7 144 13 6 6 17 52 24 103 8 52 17 101 20 111 11 36 319 98 489 98h49l-52-50c-56-54-66-88-35-122 12-14 31-18 82-18 152-1 363-40 490-93 89-36 83-41-69-57-94-9-284-1-377 16-101 19-135-63-52-125 45-34 146-166 185-242 19-38 34-71 34-74 0-7-89 29-172 71-117 58-237 143-321 226-44 43-87 78-96 78-37 0-53-25-67-106-31-181-91-306-183-381-28-24-56-43-61-43-5 0-33 19-61 43-90 74-153 203-183 380-22 131-56 136-168 24-79-78-201-164-316-221-83-42-172-78-172-71 0 3 15 36 34 74 37 73 133 200 183 242 39 33 56 64 48 89-12 37-40 43-144 31-184-20-227-22-324-11-124 13-154 20-135 31 88 56 383 119 559 119 104 0 119 58 37 140l-53 53 106-7c59-4 143-13 188-21zm-469-442c0-2-18-29-40-61-90-133-154-303-134-359 14-43 61-42 180 3 190 71 318 143 489 277l23 17 22-72c61-201 215-378 330-378 115 0 269 177 330 377l22 72 91-69c158-119 472-265 555-258 30 2 38 8 46 31 20 56-44 226-134 359-22 32-40 59-40 60 0 2 54 2 120 2 116-2 122-3 168-33 57-36 174-156 221-224 44-65 116-218 136-292 22-81 31-342 16-460-90-683-551-1518-1041-1883-98-73-258-155-345-177-76-19-214-19-290 0-87 22-247 104-345 177-489 364-952 1201-1041 1883-15 118-6 379 16 460 22 81 84 211 139 293 51 77 150 177 220 225 47 32 50 32 167 32 65 1 119 0 119-2z" />
      </g>
    </svg>
  );
}

function SmallBatchIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 90 90" className={className} fill="currentColor" aria-hidden="true">
      <g transform="translate(0 90) scale(0.1 -0.1)">
        <path d="M321 823c-19-13-28-14-42-5-41 26-89 0-89-46 0-43 80-142 113-142 16 0 73 61 93 98 19 37 17 76-4 95-23 21-41 21-71 0zm47-51c5-51-45-110-83-96-8 4-27 26-42 51-24 41-25 46-9 61 15 16 18 15 40-13 13-17 26-28 28-25 2 3 12 18 22 33 21 35 40 30 44-11z" />
        <path d="M665 794c-27-28-115-162-115-177 0-20-40-53-82-66-20-7-53-27-73-46-34-33-41-35-103-35-112-1-193-16-218-42-21-22-22-26-10-83 15-76 40-129 85-174 76-77 128-99 230-100 56-1 126 14 141 29 3 3 26 21 52 40 78 58 128 153 128 243 0 43-3 49-27 58-16 6-45 13-65 16-36 5-38 8-38 40 0 28 8 43 44 77 37 35 116 133 140 174 4 7 1 24-8 37-19 29-57 33-81 9zm45-37c0-8-24-46-53-85-38-50-57-68-64-61-8 8-2 23 18 53 17 22 40 56 52 73 22 33 47 44 47 20zm-236-326c-46-66-66-82-78-63-3 5 21 41 52 80 73 93 92 80 26-17zm-28 57c-9-13-26-38-39-55-23-34-37-42-37-21 0 12 47 78 64 90 22 15 28 7 12-14zm62-94c-22-33-48-45-48-24 0 6 15 30 33 54 26 36 33 40 35 24 2-11-7-35-20-54zm-158 50c0-25-26-84-36-84-34 0-172 22-194 31-23 10-23 11-6 21 31 17 236 45 236 32zm289-28c23-13 23-14 5-23-22-12-100-23-108-16-2 3 0 16 6 29 13 28 57 32 97 10zm-473-71c67-20 335-20 422 0 35 8 67 13 72 10 12-7-13-71-48-120-17-25-58-62-89-82-56-37-61-38-148-38-86 0-92 2-140 35-61 42-63 43-103 104-30 46-43 106-24 106 5 0 31-7 58-15z" />
      </g>
    </svg>
  );
}

function CoffeeCupIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-9 w-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 9h10v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" />
      <path d="M15 10h2.5a2.5 2.5 0 0 1 0 5H15" />
      <path d="M7 21h10" />
      <path d="M8 5c0-1 1-1.5 1-2.5" />
      <path d="M12 5c0-1 1-1.5 1-2.5" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="section-shell px-0 sm:px-8">
        <div className="relative mx-auto max-w-4xl overflow-hidden bg-cream shadow-soft sm:rounded-[3rem] lg:max-w-6xl lg:bg-transparent lg:shadow-none">
          <div
            className={`relative overflow-hidden bg-blush ${heroImageControls.frameWidth} ${heroImageControls.frameHeight} ${heroImageControls.frameMargin} ${heroImageControls.frameRadius} lg:rounded-[2rem]`}
          >
            <img
              src={heroCheesecakeJars}
              alt="Vasitos de cheesecake de frutilla con capas de crema y galleta"
              className="absolute max-w-none object-cover"
              style={{
                width: heroImageControls.imageWidth,
                height: heroImageControls.imageHeight,
                left: heroImageControls.imageLeft,
                top: heroImageControls.imageTop,
                transform: `translate(${heroImageControls.panX}, ${heroImageControls.panY}) scale(${heroImageControls.zoom})`,
                transformOrigin: "center"
              }}
            />
            <HeroImageBottomWave />
          </div>

          <div className="relative z-10 -mt-8 flex flex-col items-center px-6 pb-8 pt-0 text-center sm:-mt-10 sm:px-10 sm:pb-12 lg:px-20 lg:pb-16">
            <p
              className={`inline-flex items-center gap-3 rounded-full bg-[#F6D8C9] px-2 py-2 text-[0.66rem] font-bold uppercase tracking-[0.1em] text-pistachio ${heroPillPosition.x} ${heroPillPosition.y}`}
            >
              Horneado diario
            </p>
            <h1 className="mx-auto mt-5 max-w-xl text-center font-display text-[2.44rem] font-extrabold leading-[0.9] tracking-normal text-cherry sm:text-5xl lg:max-w-4xl lg:text-7xl">
              Texturas suaves, sabor real
            </h1>
            <BrushStroke className="mx-auto mt-3 h-4 w-36" />
            <p className="mt-3 max-w-lg text-center text-[0.9rem] leading-6 text-cocoa/75 sm:text-lg lg:max-w-2xl lg:text-xl lg:leading-8">
              Cheesecakes, tortas y facturas artesanales con texturas suaves, ingredientes reales y
              una dulzura bien medida para disfrutar sin apuro.
            </p>
            <div className="mt-4 grid w-full max-w-sm grid-cols-2 gap-3">
              <a href="#order" className="primary-button min-h-11 rounded-full px-4 text-sm">
                Pedir ahora
                <span className="ml-2 text-lg leading-none" aria-hidden="true">
                  &rarr;
                </span>
              </a>
              <a
                href="#signature-bakes"
                className="secondary-button min-h-11 rounded-full border-2 border-cherry bg-cream px-4 text-sm"
              >
                Ver menú
              </a>
            </div>
            <div className="mt-4 grid w-full max-w-sm grid-cols-[1fr_auto_1fr] items-center rounded-full bg-cream/70 px-3 py-2 text-cocoa/75 shadow-soft ring-1 ring-[#F6D8C9]/70">
              <div className="flex min-h-12 items-center justify-center gap-2">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F6D8C9]/65 text-pistachio">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 19c8 0 13-5 14-14C10 6 5 11 5 19Z" />
                    <path d="M5 19c3-4 7-7 12-9" />
                  </svg>
                </span>
                <span className="text-[0.8rem] font-medium">Recien Hecho</span>
              </div>
              <span className="h-10 w-px bg-[#F6D8C9]" aria-hidden="true" />
              <div className="flex min-h-12 items-center justify-center gap-2">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F6D8C9]/65 text-pistachio">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 8h12l1 12H5L6 8Z" />
                    <path d="M9 8a3 3 0 0 1 6 0" />
                  </svg>
                </span>
                <span className="text-[0.8rem] font-medium">Retiro & delivery</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <SoftSectionBridge />
        </div>
      </div>
    </section>
  );
}

function SignatureBakes() {
  const [favoriteBake, ...menuBakes] = bakes;
  const favoriteImageControl = signatureImageControls[favoriteBake.imageControl];

  return (
    <section id="signature-bakes" className="pb-5 pt-5 sm:pb-20 sm:pt-8 lg:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex rounded-full bg-[#F6D8C9] px-3 py-2 text-[0.67rem] font-bold uppercase tracking-[0.18em] text-pistachio">
            Favoritos de la casa
          </p>
          <div style={{ transform: `translate(${signatureTextPosition.x}, ${signatureTextPosition.y})` }}>
            <h2 className="mx-auto mt-2 max-w-xl font-display text-[2.15rem] font-extrabold leading-[0.92] tracking-normal text-cherry sm:text-5xl lg:max-w-4xl lg:text-7xl">
              Lo más pedido de Aurelia
            </h2>
            <BrushStroke className="mx-auto h-4 w-36" />
            <p className="mx-auto mt-3 max-w-xl text-[0.9rem] leading-6 text-cocoa/70 lg:max-w-2xl lg:text-xl lg:leading-8">
              Nuestros favoritos de siempre: suaves, cremosos y hechos para convertirse en antojo
              recurrente.
            </p>
          </div>
        </div>

        <div className="mt-3 space-y-2 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-5 lg:space-y-0">
          <article className="overflow-hidden rounded-[2rem] bg-white/78 shadow-soft ring-1 ring-[#F6D8C9]/60 lg:bg-transparent lg:shadow-none lg:ring-0">
            <div className={`relative overflow-hidden ${favoriteImageControl.frameHeight} lg:rounded-[2rem]`}>
              <img
                src={favoriteBake.image}
                alt={favoriteBake.title}
                className="absolute max-w-none object-cover"
                style={{
                  width: favoriteImageControl.imageWidth,
                  height: favoriteImageControl.imageHeight,
                  left: favoriteImageControl.imageLeft,
                  top: favoriteImageControl.imageTop,
                  transform: `translate(${favoriteImageControl.panX}, ${favoriteImageControl.panY}) scale(${favoriteImageControl.zoom})`,
                  transformOrigin: "center"
                }}
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-cream/95 px-2 py-1 text-[0.55rem] font-extrabold uppercase tracking-[0.08em] text-cherry shadow-soft">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M12 21s-7.5-4.4-9.5-9.2C1 8.2 3 5 6.5 5c2 0 3.4 1 4.2 2.2C11.6 6 13 5 15 5c3.5 0 5.5 3.2 4 6.8C17.5 16.6 12 21 12 21Z" />
                </svg>
                {favoriteBake.badge}
              </span>
            </div>
            <div className="py-2 px-4 sm:p-6">
              <h3 className="font-display text-2xl font-extrabold leading-tight text-cherry">
                {favoriteBake.title}
              </h3>
              <p className="mt-1 max-w-md text-sm leading-6 text-cocoa/70">
                {favoriteBake.description}
              </p>
              <div className="mt-1 flex items-center justify-between gap-4">
                <p className="font-display text-2xl font-extrabold text-cherry">
                  {favoriteBake.price}
                </p>
                <a href="#order" className="primary-button min-h-10 px-5 text-sm">
                  Pedir ahora
                </a>
              </div>
            </div>
          </article>

          <div className="space-y-2 lg:space-y-5">
          {menuBakes.map((item) => {
            const imageControl = signatureImageControls[item.imageControl];
            return (
              <article
                key={item.title}
                className="grid grid-cols-[4.8rem_1fr] items-center gap-2 rounded-[1.15rem] bg-white/78 p-2 shadow-soft ring-1 ring-[#F6D8C9]/60 lg:grid-cols-1 lg:gap-0 lg:overflow-hidden lg:rounded-[2rem] lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0"
              >
                <div className={`relative w-full overflow-hidden rounded-[0.9rem] ${imageControl.frameHeight} lg:rounded-[2rem]`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute max-w-none object-cover"
                    style={{
                      width: imageControl.imageWidth,
                      height: imageControl.imageHeight,
                      left: imageControl.imageLeft,
                      top: imageControl.imageTop,
                      transform: `translate(${imageControl.panX}, ${imageControl.panY}) scale(${imageControl.zoom})`,
                      transformOrigin: "center"
                    }}
                  />
                </div>
                <div className="min-w-0 pr-1 lg:p-5">
                  <h3 className="font-display text-[0.95rem] font-extrabold leading-tight text-cherry">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[0.68rem] leading-4 text-cocoa/70">{item.description}</p>
                  <div className="mt-0.5 flex items-center justify-between gap-2">
                    <p className="font-display text-[0.95rem] font-extrabold text-cherry">{item.price}</p>
                    <a
                      href="#order"
                      className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-lg font-bold text-cherry"
                      aria-label={`Pedir ${item.title}`}
                    >
                      ›
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
          </div>
        </div>

        <a href="#signature-bakes" className="secondary-button mt-2 w-full border-2 border-cherry bg-transparent text-base">
          Ver todo el menú
        </a>
      </div>
    </section>
  );
}

function WhyLoved() {
  return (
    <section className="bg-cream pb-6 pt-2 sm:py-14 lg:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex rounded-full bg-[#F6D8C9] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-pistachio">
            ¿Por qué Aurelia?
          </p>
          <h2 className="mx-auto mt-2 max-w-xl font-display text-[2.05rem] font-extrabold leading-[0.92] tracking-normal text-cherry sm:text-5xl lg:max-w-4xl lg:text-7xl">
            Lo bueno está en cómo lo hacemos
          </h2>
          <BrushStroke className="mx-auto mt-3 h-4 w-36" />
          <p className="mx-auto mt-2 max-w-xl text-[0.85rem] leading-6 text-cocoa/70 lg:max-w-2xl lg:text-xl lg:leading-8">
            No se trata de sumar más capas. Se trata de cuidar cada una: el horneado, la textura,
            el equilibrio y ese gesto simple de hacer algo realmente rico.
          </p>
        </div>

        <div className="mt-3 space-y-2 lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0">
          <article className="relative overflow-hidden rounded-[1.35rem] border border-[#F6D8C9] bg-cream/80 p-3 shadow-soft lg:col-span-1 lg:border-0 lg:bg-transparent lg:p-6 lg:text-center lg:shadow-none">
            <div className="relative z-10 grid grid-cols-[5.2rem_1fr] items-center gap-3 lg:grid-cols-1 lg:justify-items-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#F6D8C9]/75 text-pistachio">
                <SmallBatchIcon className="h-12 w-12" />
              </span>
              <div className="min-w-0 lg:max-w-xs">
                <h3 className="font-display text-[1.05rem] font-extrabold leading-tight text-cherry lg:text-[1.7rem]">
                  {reasons[0].title}
                </h3>
                <p className="mt-0.5 text-[0.7rem] leading-4 text-cocoa/70 lg:mt-4 lg:text-[1rem] lg:leading-7">{reasons[0].copy}</p>
              </div>
            </div>
          </article>

          {reasons.slice(1).map((reason, index) => (
            <article
              key={reason.title}
              className="grid grid-cols-[5rem_1fr] items-center gap-3 rounded-[1.25rem] border border-[#F6D8C9] bg-cream/75 p-3 shadow-soft lg:grid-cols-1 lg:justify-items-center lg:border-0 lg:bg-transparent lg:text-center lg:shadow-none"
            >
              <span className="grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full bg-[#F6D8C9]/75 text-pistachio">
                {index === 0 ? <AureliaIngredientIcon className="h-11 w-11" /> : <CoffeeCupIcon />}
              </span>
              <div className="border-l border-[#F6D8C9] pl-3 lg:border-l-0 lg:pl-0">
                  <h3 className="font-display text-[1.02rem] font-extrabold leading-tight text-cherry lg:text-[1.7rem]">
                  {reason.title}
                </h3>
                <p className="mt-0.5 text-[0.66rem] leading-4 text-cocoa/70 lg:mt-4 lg:text-[1rem] lg:leading-7">{reason.copy}</p>
              </div>
            </article>
          ))}

          <div className="grid min-h-[4.2rem] grid-cols-[5.8rem_1fr_2rem] items-center overflow-hidden rounded-[1.25rem] border border-[#F6D8C9] bg-[#F6D8C9]/25 shadow-soft lg:col-span-3 lg:grid-cols-[14rem_1fr_3rem] lg:border-0 lg:bg-transparent lg:shadow-none">
            <div className="relative h-full w-full overflow-hidden">
              <img src={productTartaLimon} alt="" className="h-full w-full object-cover" aria-hidden="true" />
              <div
                className="absolute inset-y-0 right-0 w-14 bg-gradient-to-r from-transparent via-[#FDF2DA]/80 to-[#FDF2DA] blur-[2px]"
                aria-hidden="true"
              />
            </div>
            <p className="px-3 font-display text-[0.9rem] font-extrabold leading-tight text-cherry lg:text-[1.8rem]">
              Detalles que no se ven, pero se sienten en cada bocado.
            </p>
            <span className="pr-3 text-2xl text-pistachio" aria-hidden="true">
              ♡
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryLocation() {
  const infoItems = [
    {
      label: "Horario",
      value: "Todos los días · 10:00 am - 7:00 pm",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
    },
    {
      label: "Dirección",
      value: "Av. Primavera 128, Palermo",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.4" />
        </svg>
      )
    },
    {
      label: "Pedidos",
      value: "Pickup · Delivery · Encargos especiales",
      icon: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 8h12l1 12H5L6 8Z" />
          <path d="M9 8a3 3 0 0 1 6 0" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-cream py-10 sm:py-16 lg:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex rounded-full bg-[#F6D8C9] px-3 py-2 text-[0.67rem] font-bold uppercase tracking-[0.18em] text-pistachio">
            Nuestra historia
          </p>
          <h2 className="mx-auto mt-2 max-w-2xl font-display text-[1.55rem] font-extrabold leading-[0.92] tracking-normal text-cherry sm:text-4xl lg:max-w-5xl lg:text-7xl">
            Horneamos para los momentos que merecen pausa
          </h2>
          <BrushStroke className="mx-auto mt-1 h-4 w-24" />
          <p className="mx-auto mt-2 max-w-xl text-[0.82rem] leading-5 text-cocoa/70 lg:max-w-3xl lg:text-xl lg:leading-8">
            Aurelia Bakery está pensada para quienes disfrutan lo simple bien hecho: una buena textura,
            un sabor equilibrado y un postre que mejora cualquier parte del día.
          </p>
        </div>

        <div className="mt-3 overflow-hidden rounded-[1.4rem] border border-[#F6D8C9] bg-[#F6D8C9]/20 shadow-soft lg:mt-8 lg:border-0 lg:bg-transparent lg:shadow-none">
          <img
            src={historiaImage}
            alt="Mesa de bakery con café y postre"
            className="h-[8.5rem] w-full object-cover lg:h-[24rem] lg:rounded-[2rem]"
          />
        </div>

        <div className="mt-3 rounded-[1.4rem] border border-[#F6D8C9] bg-cream/75 p-3 shadow-soft lg:grid lg:grid-cols-3 lg:gap-6 lg:border-0 lg:bg-transparent lg:p-6 lg:shadow-none">
          {infoItems.map((item, index) => (
            <div key={item.label} className="grid grid-cols-[3.4rem_1fr] items-center gap-3 py-2 lg:grid-cols-1 lg:justify-items-center lg:text-center">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#F6D8C9]/75 text-pistachio">
                {item.icon}
              </span>
              <div className={index > 0 ? "border-t border-[#F6D8C9] pt-3 lg:border-t-0 lg:pt-0" : ""}>
                <h3 className="font-display text-[1.1rem] font-extrabold leading-tight text-cherry">
                  {item.label}
                </h3>
                <p className="mt-0.5 text-[0.8rem] leading-5 text-cocoa/75">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="https://maps.google.com" className="primary-button mt-4 min-h-12 w-full text-sm lg:mx-auto lg:flex lg:max-w-md">
          Visítanos
          <span className="ml-4 text-2xl leading-none" aria-hidden="true">
            &rarr;
          </span>
        </a>

        <div className="mt-4 flex items-center justify-center gap-3 text-[#F6D8C9]" aria-hidden="true">
          <span className="h-px w-14 bg-current" />
          <span className="text-2xl text-cherry/45">♥</span>
          <span className="h-px w-14 bg-current" />
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="order" className="bg-cream pb-10 pt-8 sm:pb-16 lg:py-24">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2rem] bg-cream p-5 text-center shadow-soft ring-1 ring-[#F6D8C9]/70 sm:p-10 lg:mx-auto lg:max-w-6xl lg:bg-transparent lg:shadow-none lg:ring-0">
          <p className="inline-flex rounded-full bg-[#F6D8C9] px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-pistachio">
            Listo para pedir
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-[2rem] font-extrabold leading-[0.95] text-cherry sm:text-4xl lg:max-w-5xl lg:text-7xl">
            Tu próximo favorito ya salió del horno
          </h2>
          <BrushStroke className="mx-auto mt-3 h-4 w-36" />
          <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-7 text-cocoa/75 lg:max-w-3xl lg:text-xl lg:leading-8">
            Haz tu pedido hoy, elige algo suave, cremoso o crocante, y deja que Aurelia se encargue del
            antojo.
          </p>

          <div className="mt-6 overflow-hidden rounded-[1.6rem] border border-[#F6D8C9] bg-[#F6D8C9]/25 lg:border-0 lg:bg-transparent">
            <div
              className="h-44 bg-cover bg-center lg:h-80 lg:rounded-[2rem]"
              style={{ backgroundImage: `url(${lastCtaImage})` }}
              aria-label="Postre de Aurelia Bakery"
            />
          </div>

          <div className="mt-6 flex flex-col gap-3 lg:mx-auto lg:max-w-md">
            <a href="mailto:orders@cherrycrumb.example" className="primary-button min-h-12 w-full text-sm">
              Pedir ahora
            </a>
            <a href="#signature-bakes" className="secondary-button min-h-12 w-full border-2 border-cherry bg-transparent text-sm">
              Ver menú
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SignatureBakes />
        <SoftSectionBridge />
        <WhyLoved />
        <SoftSectionBridge />
        <StoryLocation />
        <FinalCta />
      </main>
    </>
  );
}
