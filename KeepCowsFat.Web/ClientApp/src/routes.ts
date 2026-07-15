import { FunctionComponent } from "react";
import { HomePage } from "./pages/HomePage/Home.page";
import { ServicesPage } from "./pages/ServicesPage/Services.page";
import { PlanPage } from "./pages/PlanPage/Plan.page";
import { BackstoryPage } from "./pages/BackstoryPage/Backstory.page";
import { KidsPage } from "./pages/KidsPage/Kids.page";
import { SourcesPage } from "./pages/SourcesPage/Sources.page";
import { ContactPage } from "./pages/ContactPage/Contact.page";

interface IRoute {
  pathName: string;
  Component: FunctionComponent;
}

export const routes: IRoute[] = [
  { pathName: "/", Component: HomePage },
  { pathName: "/services", Component: ServicesPage },
  { pathName: "/plan", Component: PlanPage },
  { pathName: "/backstory", Component: BackstoryPage },
  { pathName: "/kids", Component: KidsPage },
  { pathName: "/sources", Component: SourcesPage },
  { pathName: "/contact", Component: ContactPage },
];
