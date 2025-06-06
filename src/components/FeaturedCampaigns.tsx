import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Eye, Star } from "lucide-react";
import { JSX } from "react";

const FeaturedCampaigns = (): JSX.Element => {
  const featuredCampaigns = [
    {
      id: 1,
      name: "The Crown of Starlight",
      description:
        "An epic quest to recover the legendary Crown of Starlight and restore balance to the realm",
      players: "4-6 players",
      sessions: "12-16 sessions",
      difficulty: "Intermediate",
      rating: 4.8,
      tags: ["Epic Fantasy", "Political Intrigue", "Ancient Magic"],
    },
    {
      id: 2,
      name: "Whispers in the Deep",
      description:
        "A maritime adventure exploring mysterious islands and uncovering ancient sea-born secrets",
      players: "3-5 players",
      sessions: "8-12 sessions",
      difficulty: "Beginner",
      rating: 4.6,
      tags: ["Maritime", "Mystery", "Exploration"],
    },
    {
      id: 3,
      name: "The Shattered Realm",
      description:
        "Navigate a world torn apart by magical catastrophe where reality itself is unstable",
      players: "4-6 players",
      sessions: "16-20 sessions",
      difficulty: "Advanced",
      rating: 4.9,
      tags: ["High Fantasy", "Planar Travel", "Reality Bending"],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-yellow-400">Campaigns</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Explore these expertly crafted campaign modules designed to showcase
            the best of Daggerheart gameplay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCampaigns.map((campaign) => (
            <Card
              key={campaign.id}
              className="bg-linear-to-br from-slate-800/80 to-slate-900/80 border-brand-500/30 backdrop-blur-xs hover:border-brand-400/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-yellow-600/50 text-white"
                  >
                    Featured
                  </Badge>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">
                      {campaign.rating}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-white text-xl mb-2">
                  {campaign.name}
                </CardTitle>
                <CardDescription className="text-white">
                  {campaign.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-white">
                    <Users className="w-4 h-4" />
                    {campaign.players}
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Calendar className="w-4 h-4" />
                    {campaign.sessions}
                  </div>
                </div>

                <div className="text-sm text-white">
                  Difficulty:{" "}
                  <span className="text-white font-medium">
                    {campaign.difficulty}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {campaign.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-brand-400/50 text-white text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full bg-linear-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold">
                  <Eye className="w-4 h-4 mr-2" />
                  View Campaign
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
