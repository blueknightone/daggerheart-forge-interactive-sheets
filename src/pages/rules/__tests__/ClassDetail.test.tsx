import { act, render } from "../../../test-utils";
import ClassDetail from "../ClassDetail";

// Mock react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ className: "guardian" }),
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

// Mock supabase helpers
jest.mock("@/integrations/supabase/helpers", () => ({
  getSingleClassBySlugWithDomains: jest.fn().mockResolvedValue({
    id: 1,
    name: "Guardian",
    slug: "guardian",
    description: "Protector and defender",
    base_hp: 10,
    base_evasion: 10,
    class_items: "Shield, Sword",
    features: [
      {
        name: "Test Feature",
        description: "Test description",
      },
    ],
    domains: [
      {
        id: 1,
        name: "Protection",
      },
    ],
    subclass: [
      {
        name: "Armor",
        features: {
          foundation: [
            {
              name: "Foundation Feature",
              description: "Foundation description",
            },
          ],
          specialization: [
            {
              name: "Specialization Feature",
              description: "Specialization description",
            },
          ],
          mastery: [
            {
              name: "Mastery Feature",
              description: "Mastery description",
            },
          ],
        },
      },
    ],
  }),
}));

describe("ClassDetail Page", () => {
  it("renders correctly", async () => {
    const { container } = render(<ClassDetail />);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
