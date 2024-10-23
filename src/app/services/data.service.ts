import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  premiereMix: any[] = [
    {
      path: '../../assets/m10-grade.png',
      heading: 'M10-GRADE',
      mixRatioDescription: 'Mix ratio: 1:3:6 (1 cement, 3 sand and 6 aggregate)',
      sustainabilityDescription: 'Suitability: Used as PCC (Plain Cement Concrete) in the construction of levelling course, bedding for footing, concrete roads, etc.'
    },
    {
      path: '../../assets/m15-grade.png',
      heading: 'M15-GRADE',
      mixRatioDescription: 'Mix ratio: 1:2:4 (1 cement, 2 sand and 4 aggregate)',
      sustainabilityDescription: 'Suitability: Used as PCC (Plain Cement Concrete) in the construction of levelling course, bedding for footing, concrete roads, etc.'
    },
    {
      path: '../../assets/m15-grade.png',
      heading: 'M20-GRADE',
      mixRatioDescription: 'Mix ratio: 1:3:6 (1 cement, 3 sand and 6 aggregate)',
      sustainabilityDescription: 'Suitability: Used as PCC (Plain Cement Concrete) in the construction of levelling course, bedding for footing, concrete roads, etc.'
    },
  ];
  residentialMix: any[] = [
    {
      path: '../../assets/m10-grade.png',
      heading: 'M10-GRADsssE',
      mixRatioDescription: 'Mix ratio: 1:3:6 (1 cement, 3 sand and 6 aggregate)',
      sustainabilityDescription: 'Suitability: Used as PCC (Plain Cement Concrete) in the construction of levelling course, bedding for footing, concrete roads, etc.'
    },
    {
      path: '../../assets/m15-grade.png',
      heading: 'M15-GRADE',
      mixRatioDescription: 'Mix ratio: 1:3:6 (1 cement, 3 sand and 6 aggregate)',
      sustainabilityDescription: 'Suitability: Used as PCC (Plain Cement Concrete) in the construction of levelling course, bedding for footing, concrete roads, etc.'
    },
    {
      path: '../../assets/m20-grade.png',
      heading: 'M20-GRADE',
      mixRatioDescription: 'Mix ratio: 1:3:6 (1 cement, 3 sand and 6 aggregate)',
      sustainabilityDescription: 'Suitability: Used as PCC (Plain Cement Concrete) in the construction of levelling course, bedding for footing, concrete roads, etc.'
    },
  ];
  microTech: any[] = [
    {
      path: '../../assets/m10-grade.png',
      heading: 'M10-GRADE',
      mixRatioDescription: 'Mix ratio: 1:3:6 (1 cement, 3 sand and 6 aggregate)',
      sustainabilityDescription: 'Suitability: Used as PCC (Plain Cement Concrete) in the construction of levelling course, bedding for footing, concrete roads, etc.'
    },
    {
      path: '../../assets/m15-grade.png',
      heading: 'M15-GRADE',
      mixRatioDescription: 'Mix ratio: 1:3:6 (1 cement, 3 sand and 6 aggregate)',
      sustainabilityDescription: 'Suitability: Used as PCC (Plain Cement Concrete) in the construction of levelling course, bedding for footing, concrete roads, etc.'
    },
    {
      path: '../../assets/m20-grade.png',
      heading: 'M20-GRADE',
      mixRatioDescription: 'Mix ratio: 1:3:6 (1 cement, 3 sand and 6 aggregate)',
      sustainabilityDescription: 'Suitability: Used as PCC (Plain Cement Concrete) in the construction of levelling course, bedding for footing, concrete roads, etc.'
    },
  ];
  special: any[] = [
    {
      path: '../../assets/m10-grade.png',
      heading: 'M10-GRADE',
      mixRatioDescription: 'Mix ratio: 1:3:6 (1 cement, 3 sand and 6 aggregate)',
      sustainabilityDescription: 'Suitability: Used as PCC (Plain Cement Concrete) in the construction of levelling course, bedding for footing, concrete roads, etc.'
    },
    {
      path: '../../assets/m15-grade.png',
      heading: 'M15-GRADE',
      mixRatioDescription: 'Mix ratio: 1:3:6 (1 cement, 3 sand and 6 aggregate)',
      sustainabilityDescription: 'Suitability: Used as PCC (Plain Cement Concrete) in the construction of levelling course, bedding for footing, concrete roads, etc.'
    },
    {
      path: '../../assets/m20-grade.png',
      heading: 'M20-GRADE',
      mixRatioDescription: 'Mix ratio: 1:3:6 (1 cement, 3 sand and 6 aggregate)',
      sustainabilityDescription: 'Suitability: Used as PCC (Plain Cement Concrete) in the construction of levelling course, bedding for footing, concrete roads, etc.'
    },
  ];
  servicesNavItems: any[] = [
    {
      route: 'residential',
      label: 'Residential'
    },
    {
      route: 'infrastructure',
      label: 'Infrastructure'
    },
    {
      route: 'industries',
      label: 'Industries'
    },
    {
      route: 'transport',
      label: 'Transport'
    },
    {
      route: 'concreteAdditive',
      label: 'Concrete Additive'
    },
    {
      route: 'readyMix',
      label: 'Ready Mix'
    },
    {
      route: 'commercialDelivery',
      label: 'Commercial Delivery'
    },
  ]

  servicesDetailsList: any[] = [
    {
      path: '../../assets/residential_img.png',
      description: `Ready Mix Concrete is an ideal solution for varied applications in residential constructions such as apartments, villas and independent houses. From building walls to foundations to sidewalks and driveways, RMC is high on quality and versatility and, more importantly, saves time. It also contributes to the desired sophistication and finishes that mark new-age constructions. Depending on your project's scale and scope, Vaishnavi Concrete provides customization with the help of additives and colourants to meet specif design requirements.`,
      identifier: 'residential'
    },
    {
      path: '../../assets/concrete_additive.png',
      description: `Concrete additives enhance the performance and durability of concrete mixes. They can improve workability, reduce water content, and accelerate curing times. Some additives provide resistance to environmental factors like freeze-thaw cycles and chemical attacks. Others may include fibers for increased tensile strength and reduced cracking. Utilizing the right additives can significantly extend the lifespan and structural integrity of concrete applications.`,
      identifier: 'concreteAdditive'
    },
    {
      path: '../../assets/transport.png',
      description: `Transporting the concrete mix is defined as the transferring of concrete from the mixing plant to the construction site.`,
      identifier: 'transport'
    },
    {
      path: '../../assets/infrastructure.png',
      description: `The infrastructure sector has undergone a sea of transformation in recent years. Rapid urbanization and the need for faster connectivity have significantly elevated quality standards and expectations. RMC aligns with today’s dynamic construction needs and helps achieve more substantial outcomes at par with the best in the world right here in India. Vaishnavi Concrete brings in the innovation and scope needed to match the grand vision of these infrastructure projects, such as roads, highways, airports, metro projects, bridges and more. From providing need based customized grades and the required volumes according to the timelines, Vaishnavi Concrete is the partner of choice to accomplish landmark projects successfully while saving significant time and costs.`,
      identifier: 'infrastructure'
    },
    {
      path: '../../assets/industries.png',
      description: `Industrial structures like Pharmaceuticals, Manufacturing plants, Mobile manufacturing, Data centers, etc.. are specialized constructions that can significantly benefit from RMC’s core characteristics of compressive strength, proportioning of ingredients, workability and water-cement ratio, all configured per the project specifications. Manufactured under controlled conditions, high quality Vaishnavi Concrete comes with the highest precision that directly impacts structural strength, thus helping the organization achieve uninterrupted workflow and long-term goals.`,
      identifier: 'industries'
    },
    {
      path: '../../assets/ready_mix.png',
      description: `At Vaishnavi Concrete, ready mixed concrete is produced in its fully automated and computerized concrete batching plants at multiple locations across India.`,
      identifier: 'readyMix'
    },
    {
      path: '../../assets/commercial_delivery.png',
      description: `Commercial concrete can be broadly defined as concrete used to build or enhance business facilities, such as industrial buildings, warehouses, retail stores and even restaurants.`,
      identifier: 'commercialDelivery'
    }
  ]

  mediaItems: any[] = [
    {
      path: '../../../../assets/media_2.png',
      description: 'Site Image 1',
      location: 'Nagole'
    },
    {
      path: '../../assets/media_2.png',
      description: 'Site Image 2',
      location: 'Bacharam, ORR Exit No 10'
    },
    {
      path: '../../assets/media_3.png',
      description: 'Site Image 3',
      location: 'Manneguda'
    },
    {
      path: '../../assets/media_4.png',
      description: 'Site Image 4',
      location: 'Medchal'
    },
    {
      path: '../../assets/media_5.png',
      description: 'Site Image 5',
      location: 'Kothapet Commercial'
    },
  ]

}
