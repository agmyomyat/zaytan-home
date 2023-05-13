import { useDarkMode } from "storybook-dark-mode";
import { MantineProvider } from "@mantine/core";
import "../src/styles/tailwind.css";
import { theme } from "../src/styles/theme";
export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

function ThemeWrapper(props:any) {
	return (
		<MantineProvider
			theme={{
				colorScheme: "light",
			}}
			withGlobalStyles
			withNormalizeCSS
		>
			{props.children}
		</MantineProvider>
	);
}

export const decorators = [(renderStory: () => any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
