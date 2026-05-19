/**
 * Gembox Illustrations — StreamlineIllustrations
 * Name=Hiring-8, Size=lg (320×320)
 * https://www.figma.com/design/IgohaddARKIJHihXX0OE4Z/Gembox-Components?node-id=13667-18571
 *
 * Layer geometry from get_design_context on 13667:18571 — do not flatten to PNG.
 */

const LAYERS = {
  phone: "/assets/gembox/illustrations/hiring-8/phone.svg",
  screen: "/assets/gembox/illustrations/hiring-8/screen.svg",
  bag: "/assets/gembox/illustrations/hiring-8/bag.svg",
  magnifier: "/assets/gembox/illustrations/hiring-8/magnifier.svg",
} as const;

type GemboxIllustrationHiring8Props = {
  className?: string;
  /** lg = 320px, sm = 270px per gembox-illustrations */
  size?: "lg" | "sm";
};

export function GemboxIllustrationHiring8({
  className = "",
  size = "lg",
}: GemboxIllustrationHiring8Props) {
  return (
    <figure
      className={`gb-illustration gb-illustration--hiring-8 gb-illustration--${size} ${className}`.trim()}
      aria-hidden="true"
    >
      <div className="gb-illustration__stage">
        <img className="gb-illustration__layer gb-illustration__layer--phone" src={LAYERS.phone} alt="" />
        <img className="gb-illustration__layer gb-illustration__layer--screen" src={LAYERS.screen} alt="" />
        <img className="gb-illustration__layer gb-illustration__layer--bag" src={LAYERS.bag} alt="" />
        <img
          className="gb-illustration__layer gb-illustration__layer--magnifier"
          src={LAYERS.magnifier}
          alt=""
        />
      </div>
    </figure>
  );
}
