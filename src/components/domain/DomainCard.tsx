import { Domain } from "@/lib/types";
import { JSX } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { Dice6 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { publishDomain } from "@/integrations/supabase/helpers/domains";

interface DomainCardsInterface {
  domainsData: Partial<Domain>[] | null;
}

const DomainCards = ({
  domainsData,
}: DomainCardsInterface): JSX.Element[] | JSX.Element => {
  const { user } = useAuth();

  if (domainsData && domainsData.length === 0) {
    return (
      <h3 className="text-white text-center mb-2 col-span-12">
        No domains found
      </h3>
    );
  }

  return domainsData
    ? domainsData.map((cls) => (
        <Card
          key={cls.id}
          className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-purple-500/30 backdrop-blur-xs justify-between flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Dice6 className="w-6 h-6" />
              </div>
              <CardTitle className="text-white">{cls.name}</CardTitle>
            </div>
            <CardDescription className="text-purple-200 truncate-5-lines">
              {cls.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <div className="space-y-3">
              <div className="pt-2 mt-auto">
                {user?.id === cls.user_id && !cls.isPublished && (
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-2"
                    onClick={() => {
                      void publishDomain(Number(cls.id));
                    }}
                  >
                    Publish
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))
    : Array(12)
        .fill(null)
        .map((_, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-purple-500/30 backdrop-blur-xs justify-between flex flex-col"
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Skeleton className="w-10 h-10 rounded-lg" />
                <Skeleton className="h-6 w-32" />
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-purple-200 flex-1 h-full">
                <Skeleton className="h-full w-full" />
              </div>
            </CardContent>
          </Card>
        ));
};

export default DomainCards;
