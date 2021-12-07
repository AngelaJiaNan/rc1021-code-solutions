select "g"."name" as "filmGenre",
        count("g".*) as "count"
from "castMembers"
join "actors" using ("actorId")
join "filmGenre" using ("filmId")
join "genres" as "g" using ("genreId")
where ("actors"."firstName" = 'Lisa' AND "actors"."lastName" = 'Monroe')
group by "genreId";
