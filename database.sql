CREATE TABLE "yarn_weight" (
	"id" SERIAL PRIMARY KEY,
	"weight" VARCHAR (100)
);

CREATE TABLE "yarn_brand" (
	"id" SERIAL PRIMARY KEY,
	"brand_name" VARCHAR (100)
);

CREATE TABLE "fiber_content" (
	"id" SERIAL PRIMARY KEY,
	"fiber_content" VARCHAR (100)
);

CREATE TABLE "difficulty_levels" (
	"id" SERIAL PRIMARY KEY,
	"difficulty_level" VARCHAR
);

CREATE TABLE "pattern_type" (
	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR (100)
);

CREATE TABLE "designer_names" (
	"id" SERIAL PRIMARY KEY,
	"designer_name" VARCHAR (100)
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" BOOLEAN
);

CREATE TABLE "yarn_inventory" (
	"yarn_id" SERIAL PRIMARY KEY,
	"brand" INT REFERENCES "yarn_brand" ("id"),
	"skeins" INT,
	"fiber_content" INT REFERENCES "fiber_content" ("id"),
	"weight" INT REFERENCES "yarn_weight" ("id"),
	"grams_in_skein" INT,
	"dye_lot" VARCHAR (100),
	"user_id" INT REFERENCES "user" ("id"),
    "yarn_image" varchar(300) NOT NULL
);

CREATE TABLE "patterns_inventory" (
	"pattern_id" SERIAL PRIMARY KEY,
	"title" VARCHAR (100),
	"designer_name" INT REFERENCES "designer_names" ("id"),
	"pattern_type" INT REFERENCES "pattern_type" ("id"),
	"difficulty_level" INT REFERENCES "difficulty_levels" ("id"),
	"yarn_weight_needed" INT REFERENCES "yarn_weight" ("id"),
	"user_id" INT REFERENCES "user" ("id"),
    "pattern_image" varchar(300) NOT NULL
);

CREATE TABLE "project_tracking" (
	"project_id" SERIAL PRIMARY KEY,
	"pattern_id" INT REFERENCES "patterns_inventory" ("pattern_id"),
	"date_started" date,
	"notes" VARCHAR,
	"progress" INT,
	"yarn_id" INT REFERENCES "yarn_inventory" ("yarn_id"),
	"user_id" INT REFERENCES "user" ("id"),
    "project_image" varchar(300) NOT NULL
);

-- Seed Data

INSERT INTO "designer_names" ("designer_name") VALUES ('My Favorite Things Knitwear'), ('Caidree'), ('Ozetta'), ('Ullen Knitwear'), ('New Wave Knitting');

INSERT INTO "difficulty_levels" ("difficulty_level") VALUES ('Beginner'), ('Intermediate'), ('Advanced');

INSERT INTO "fiber_content" ("fiber_content") VALUES ('Cotton'), ('Wool'), ('Linen'), ('Alpaca');

INSERT INTO "pattern_type" ("type") VALUES ('Clothing'), ('Accessories'), ('Home Goods');

INSERT INTO "user" ("id", "username", "password", "admin") VALUES (1, 'gabrielle', 'pass', TRUE);

INSERT INTO "yarn_brand" ("brand_name") VALUES ('Cascade Yarns'), ('Woolstok'), ('Isager'), ('Knitting For Olive');

INSERT INTO "yarn_weight" ("weight") VALUES ('Lace'), ('Sock'), ('Sport'), ('Double Knit'), ('Worsted'), ('Bulky');

INSERT INTO "yarn_inventory" ("yarn_id", "brand", "skeins", "fiber_content", "weight", "grams_in_skein", "dye_lot", "user_id", "yarn_image") VALUES (1, 1, 1, 1, 1, 50, 'blue', 1, 'img.jpg');

INSERT INTO "patterns_inventory" ("pattern_id", "title", "designer_name", "pattern_type", "difficulty_level", "yarn_weight_needed", "user_id", "pattern_image") VALUES (1, 'Sophie Scarf', 1, 2, 2, 4, 1, 'pattern.jpg');

INSERT INTO "project_tracking" ("project_id", "pattern_id", "date_started", "notes", "progress", "yarn_id", "user_id", "project_image") VALUES (1, 1, '01-01-2024', 'test notes', 25, 1, 1, 'project.jpg');








