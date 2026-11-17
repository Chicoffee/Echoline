import type { ServiceItem} from '../types/service'
import Patch3_8 from '../assets/service-cards/account-maintenance/3-8.png'
import Jinzhou from '../assets/service-cards/map-exploration/Jinzhou.webp'
import Blackshores from '../assets/service-cards/map-exploration/The_Black_Shores.webp'
import Rinascita from '../assets/service-cards/map-exploration/Rinascita.webp'
import RoyaFrostlands from '../assets/service-cards/map-exploration/Lahai-Roi.webp'
import Mengzhou from '../assets/service-cards/map-exploration/Mengzhou.webp'


export const specialOffers: ServiceItem[] = [
    {
        id: "patch-3-8",
        title: "Account Maintenance Patch 3.8",
        image: Patch3_8,
        price: 1000,
        features: [
            "Everything within the patch are included from events to map exploration.",
            "Runs from day 1 to last day of the patch.",
            "Dailies and weekly tasks are included with update everyday.",
            "Endgame content are included but varies depending on account.",
        ],
    },
];

export const mapExploration: ServiceItem[] = [
    {
        id: "jinzhou",
        title: "Huanglong: Jinzhou",
        image: Jinzhou,
        price: 1500,
        features: [
            "All areas are included.",
            "100% chests and caskets supported with Interactive Map.",
            "Approximately 12,000 astrites",
        ],
    },
    {
        id: "blackshores",
        title: "The Blackshores",
        image: Blackshores,
        price: 300,
        features: [
            "All areas are included.",
            "100% chests and caskets supported with Interactive Map.",
            "Approximately 2,000 astrites",
        ],
    },
    {
        id: "rinascita",
        title: "Rinascita",
        image: Rinascita,
        price: 2000,
        features: [
            "All areas are included (Ragunna and Septimont).",
            "100% chests and caskets supported with Interactive Map.",
            "Approximately 13,000 astrites",
        ],
    },
    {
        id: "lahairoi",
        title: "Roya Frostlands",
        image: RoyaFrostlands,
        price: 2000,
        features: [
            "All areas are included (Lahai Roi, RF Surface, and Dimmr Plains).",
            "100% chests and caskets supported with Interactive Map.",
            "Approximately 10,000 astrites",
        ],
    },
    {
        id: "mengzhou",
        title: "Huanglong: Mengzhou",
        image: Mengzhou,
        price: 1500,
        features: [
            "All areas are included.",
            "100% chests and caskets supported with Interactive Map.",
            "Approximately 7,000 astrites",
        ],
    },
]