import { FunctionComponent } from "react";
import { HomePage } from "./pages/homePage/Home.page";

interface IRoute {
	pathName: string;
	Component: FunctionComponent;
}

export const routes: IRoute[] = [{ pathName: "/", Component: HomePage }];
