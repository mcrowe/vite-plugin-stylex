import * as stylex from "@stylexjs/stylex";
import { tokens } from "./theme.stylex";
import { colors } from "@stylexjs/open-props/lib/colors.stylex";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div {...stylex.props(styles.root)} data-testid="card">
        {children}
      </div>
      <img {...stylex.props(styles.asset)} />
    </>
  );
}

const styles = stylex.create({
  root: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    boxShadow: "0 0 16px rgba(0, 0, 0, 0.1)",
    color: tokens.primaryTextColor,
    border: `1px solid ${colors.blue1}`,
  },
  asset: {
    backgroundImage: "url(/vite.svg)",
    width: 32,
    height: 32,
  },
});
