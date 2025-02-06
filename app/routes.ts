import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("login", "routes/login.tsx"), route("register", "routes/register.tsx"), route("homepage", "routes/homepage.tsx")] satisfies RouteConfig;
// export default [index("routes/login.tsx"), route("register", "routes/register.tsx"), route("homepage", "routes/homepage.tsx")] satisfies RouteConfig;
