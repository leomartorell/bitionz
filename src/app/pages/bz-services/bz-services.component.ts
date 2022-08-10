import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BzServicesInterface } from '../../interfaces/bz-services.interface';

@Component({
  selector: 'app-bz-services',
  templateUrl: './bz-services.component.html',
  styleUrls: ['./bz-services.component.scss'],
})
export class BzServicesComponent implements OnInit {
  bzServiceContent: BzServicesInterface[] = [
    {
      service: 'Blockchain',
      background:
        '../../../assets/images/backgrounds/background-blockchain.png',
      backgroundMobile:
        '../../../assets/images/backgrounds/background-blockchain-m.png',
      items: [
        {
          title: 'Smart Contract',
          text: 'Con el objeto de presevar la autencidad y la credibilidad, planificamos, diseñamos y desarrollamos soluciones descentralizadas seguras y transparentes que hacen posible que se lleven a cabo transacciones y acuerdos sin la necesidad de contar con un sistema central de control.',
        },
        {
          title: 'DeFi (Finanzas descentralizadas)',
          text: 'Gracias a la amplia gama de talentos de nuestros equipos, ayudamos a las organizaciones a emplear soluciones basadas en DeFi para optimizar, automatizar y mejorar la seguridad general de sus operaciones. Te acompañamos a lo largo del proceso de diseño, implementación y utilizacion de productos y servicios financieros basados en la blockchain que sean descentralizados, seguros y accesible para todos. ',
        },
        {
          title: 'Tokenización',
          text: 'Revolucionamos los mercados comerciales a través del diseño de soluciones que involucran tokens y tokens no fungibles (NFT). A través de la tokenización digital, te ayudamos a crear productos novedosos que presentan grandes beneficios para los sectores del arte, las finanzas, la producción, los bienes raíces, logística  y distribución.       ',
        },
        {
          title: 'Desarrollo y Asesoría',
          text: 'Te enseñamos cómo aprovechar al máximo la tecnología blockchain para transformar tu empresa. Junto a vos diseñamos, implementamos y creamos soluciones basadas en la blockchain para resolver tus necesidades específicas.',
        },
      ],
    },
    {
      service: 'Development',
      background:
        '../../../assets/images/backgrounds/background-development.png',
      backgroundMobile:
        '../../../assets/images/backgrounds/background-development-m.png',
      description:
        'Utilizamos metodologías ágiles en cada uno de los procesos y proyectos qué desarrollamos; contamos con un equipo qué puede adaptarse a tus necesidades y qué te llevará a obtener el mejor resultado gracias a una gestión de proyectos y empresarial flexibles y orientada a tus objetivos.',
      items: [
        {
          title: 'Desarrollo web',
          text: 'Te ayudamos a qué puedas llegar a la mayor cantidad de clientes con un sitio web optimizado y adaptado a tus necesidades. Nuestro equipo se encarga de todo, diseñar, programar y adaptar tu producto a los diversos dispositivos.          ',
        },
        {
          title: 'Soluciones dedicadas de Back End y Front End',
          text: 'Creamos el producto qué necesites o te ayudamos a solucionar los problemas qué tengas en tus sistemas. Utilizamos diversas tecnologías, Nodejs, Angular, React, Javascript, HTML, CSS.',
        },
        {
          title: 'DevOps',
          text: 'Trabajamos para reducir el tiempo entre el desarrollo de software y las operaciones IT. Nuestro compromiso es establecer una relación ágil entre las dos a fin de que las empresas puedan crear y lanzar actualizaciones regulares para los productos, optimizando tiempos y recursos cloud.',
        },
        {
          title: 'Inteligencia Artificial',
          text: 'Mediante nuestro equipo capacitado en Inteligencia Artificial, nos encargaremos de darle sentido a tus datos para realizar aprendizaje de máquinas supervisado o no supervisado. Utilizamos algoritmos avanzados, como redes neuronales profundas, para encontrar patrones y resolver problemas de clasificación y automatización. ',
        },
        {
          title: 'Diseño UX/UI',
          text: 'A partir de conocer a tu público objetivo creamos interfaces en las que tus usuarios puedan interactuar de manera eficientes. Buscamos iterar continuamente para crear la mejor experiencia posible.',
        },
        {
          title: 'Data Analitycs',
          text: 'Identificamos las necesidades de tu negocio con el fin de brindarte una solución a través del análisis de datos. La data analytics permite: identificar patrones, detectar riesgos y oportunidades en las empresas y obtener información para brindar acciones inteligentes, mejorando la participación del cliente, incrementando los ingresos y reduciendo los costos en la organización.          ',
        },
      ],
    },
    {
      service: 'Gaming',
      description:
        'Desarrollo e ingeniería de sistemas, mecanicas centrales, jugabilidad e IA. Trabajamos con Unreal y Unity, con amplia experiencia en C++ y C#.\nDiseño conceptual de productos y análisis de negocio. Diseño de juegos, niveles y narrativas. Guiones de juego.',
      background: '../../../assets/images/backgrounds/background-gaming.png',
      backgroundMobile:
        '../../../assets/images/backgrounds/background-gaming-m.png',
      items: [
        {
          title: 'Ingeniería de juegos y gráficos',
          icon: '../../../assets/images/icons/engine-game.svg',
        },
        {
          title: 'Desarrollo Front End y Back End',
          icon: '../../../assets/images/icons/front-back.svg',
        },
        {
          title: 'Servicios de QA',
          icon: '../../../assets/images/icons/qa-services.svg',
        },
        {
          title: 'Gestión de productos',
          icon: '../../../assets/images/icons/product-management.svg',
        },
        {
          title: 'Game Design',
          icon: '../../../assets/images/icons/game-design.svg',
        },
        {
          title: 'Diseño de niveles',
          icon: '../../../assets/images/icons/level-design.svg',
        },
      ],
    },
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  innerWidth!: number;
  activeService!: number;

  constructor(private activatedRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(({ service }) => {
      this.activeService = this.bzServiceContent.findIndex(
        (item) => item.service.toLowerCase() == service
      );
      let el = document.getElementById('top');
      el?.scrollIntoView();
    });
    this.innerWidth = window.innerWidth;
  }
}
