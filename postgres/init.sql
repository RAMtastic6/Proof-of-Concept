--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2024-03-20 11:07:43

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 850 (class 1247 OID 19119)
-- Name: dayopen; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.dayopen AS ENUM (
    'lunedì',
    'martedì',
    'mercoledì',
    'giovedì',
    'venerdì',
    'sabato',
    'domenica'
);


ALTER TYPE public.dayopen OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 19167)
-- Name: customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    surname character varying(30) NOT NULL,
    email character varying(256) NOT NULL
);


ALTER TABLE public.customer OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 19166)
-- Name: customer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.customer ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.customer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 214 (class 1259 OID 19133)
-- Name: daysopen; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.daysopen (
    restaurant_id integer NOT NULL,
    day_open public.dayopen NOT NULL,
    opening time without time zone NOT NULL,
    closing time without time zone NOT NULL
);


ALTER TABLE public.daysopen OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 19145)
-- Name: food; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.food (
    id integer NOT NULL,
    menu_id integer NOT NULL,
    name character varying(100) NOT NULL,
    price double precision NOT NULL
);


ALTER TABLE public.food OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 19144)
-- Name: food_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.food ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.food_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 216 (class 1259 OID 19139)
-- Name: menu; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.menu (
    id integer NOT NULL,
    name character varying(100) NOT NULL
);


ALTER TABLE public.menu OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 19138)
-- Name: menu_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.menu ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.menu_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 227 (class 1259 OID 19280)
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    customer_id integer,
    food_id integer,
    reservation_id integer,
    number integer DEFAULT 1
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 19279)
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.orders ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.orders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 224 (class 1259 OID 19173)
-- Name: reservation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reservation (
    id integer NOT NULL,
    date timestamp without time zone NOT NULL,
    number_people integer NOT NULL,
    restaurant_id integer NOT NULL
);


ALTER TABLE public.reservation OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 19183)
-- Name: reservation_group; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reservation_group (
    reservation_id integer NOT NULL,
    customer_id integer NOT NULL
);


ALTER TABLE public.reservation_group OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 19172)
-- Name: reservation_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.reservation ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.reservation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 220 (class 1259 OID 19156)
-- Name: restaurant; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.restaurant (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    address character varying(100) NOT NULL,
    city character varying(100) NOT NULL,
    cuisine character varying(100) NOT NULL,
    menu_id integer NOT NULL
);


ALTER TABLE public.restaurant OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 19155)
-- Name: restaurant_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.restaurant ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.restaurant_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3386 (class 0 OID 19167)
-- Dependencies: 222
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3378 (class 0 OID 19133)
-- Dependencies: 214
-- Data for Name: daysopen; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (1, 'lunedì', '12:00:00', '15:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (1, 'martedì', '12:00:00', '15:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (1, 'mercoledì', '12:00:00', '15:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (1, 'giovedì', '12:00:00', '15:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (1, 'venerdì', '12:00:00', '15:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (1, 'lunedì', '19:00:00', '23:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (1, 'martedì', '19:00:00', '23:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (1, 'mercoledì', '19:00:00', '23:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (1, 'giovedì', '19:00:00', '23:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (1, 'venerdì', '19:00:00', '23:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (2, 'lunedì', '12:00:00', '15:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (2, 'martedì', '12:00:00', '15:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (2, 'mercoledì', '12:00:00', '15:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (2, 'giovedì', '12:00:00', '15:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (2, 'venerdì', '12:00:00', '15:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (2, 'lunedì', '19:00:00', '23:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (2, 'martedì', '19:00:00', '23:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (2, 'mercoledì', '19:00:00', '23:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (2, 'giovedì', '19:00:00', '23:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (2, 'venerdì', '19:00:00', '23:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (3, 'lunedì', '12:00:00', '15:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (3, 'martedì', '12:00:00', '15:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (3, 'mercoledì', '12:00:00', '15:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (3, 'giovedì', '12:00:00', '15:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (3, 'venerdì', '12:00:00', '15:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (3, 'lunedì', '19:00:00', '23:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (3, 'martedì', '19:00:00', '23:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (3, 'mercoledì', '19:00:00', '23:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (3, 'giovedì', '19:00:00', '23:00:00');
INSERT INTO public.daysopen (restaurant_id, day_open, opening, closing) VALUES (3, 'venerdì', '19:00:00', '23:00:00');


--
-- TOC entry 3382 (class 0 OID 19145)
-- Dependencies: 218
-- Data for Name: food; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.food (id, menu_id, name, price) OVERRIDING SYSTEM VALUE VALUES (1, 1, 'Spaghetti alla carbonara', 10);
INSERT INTO public.food (id, menu_id, name, price) OVERRIDING SYSTEM VALUE VALUES (2, 1, 'Spaghetti all''amatriciana', 9);
INSERT INTO public.food (id, menu_id, name, price) OVERRIDING SYSTEM VALUE VALUES (3, 1, 'Spaghetti al pomodoro', 8);
INSERT INTO public.food (id, menu_id, name, price) OVERRIDING SYSTEM VALUE VALUES (4, 2, 'Riso alla cantonese', 10);
INSERT INTO public.food (id, menu_id, name, price) OVERRIDING SYSTEM VALUE VALUES (5, 2, 'Riso fritto', 9);
INSERT INTO public.food (id, menu_id, name, price) OVERRIDING SYSTEM VALUE VALUES (6, 2, 'Riso saltato', 8);
INSERT INTO public.food (id, menu_id, name, price) OVERRIDING SYSTEM VALUE VALUES (7, 3, 'Pizza margherita', 10);
INSERT INTO public.food (id, menu_id, name, price) OVERRIDING SYSTEM VALUE VALUES (8, 3, 'Pizza marinara', 9);
INSERT INTO public.food (id, menu_id, name, price) OVERRIDING SYSTEM VALUE VALUES (9, 3, 'Pizza capricciosa', 8);


--
-- TOC entry 3380 (class 0 OID 19139)
-- Dependencies: 216
-- Data for Name: menu; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.menu (id, name) OVERRIDING SYSTEM VALUE VALUES (1, 'Menu 1');
INSERT INTO public.menu (id, name) OVERRIDING SYSTEM VALUE VALUES (2, 'Menu 2');
INSERT INTO public.menu (id, name) OVERRIDING SYSTEM VALUE VALUES (3, 'Menu 3');


--
-- TOC entry 3391 (class 0 OID 19280)
-- Dependencies: 227
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3388 (class 0 OID 19173)
-- Dependencies: 224
-- Data for Name: reservation; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3389 (class 0 OID 19183)
-- Dependencies: 225
-- Data for Name: reservation_group; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3384 (class 0 OID 19156)
-- Dependencies: 220
-- Data for Name: restaurant; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.restaurant (id, name, address, city, cuisine, menu_id) OVERRIDING SYSTEM VALUE VALUES (1, 'Ristorante 1', 'Via Roma', 'Roma', 'italiana', 1);
INSERT INTO public.restaurant (id, name, address, city, cuisine, menu_id) OVERRIDING SYSTEM VALUE VALUES (2, 'Ristorante 2', 'Via Milano', 'Milano', 'cinese', 2);
INSERT INTO public.restaurant (id, name, address, city, cuisine, menu_id) OVERRIDING SYSTEM VALUE VALUES (3, 'Ristorante 3', 'Via Napoli', 'Napoli', 'pizza', 3);


--
-- TOC entry 3397 (class 0 OID 0)
-- Dependencies: 221
-- Name: customer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customer_id_seq', 1, false);


--
-- TOC entry 3398 (class 0 OID 0)
-- Dependencies: 217
-- Name: food_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.food_id_seq', 9, true);


--
-- TOC entry 3399 (class 0 OID 0)
-- Dependencies: 215
-- Name: menu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.menu_id_seq', 3, true);


--
-- TOC entry 3400 (class 0 OID 0)
-- Dependencies: 226
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 1, false);


--
-- TOC entry 3401 (class 0 OID 0)
-- Dependencies: 223
-- Name: reservation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reservation_id_seq', 1, false);


--
-- TOC entry 3402 (class 0 OID 0)
-- Dependencies: 219
-- Name: restaurant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.restaurant_id_seq', 3, true);


--
-- TOC entry 3217 (class 2606 OID 19226)
-- Name: restaurant UQ_5a6420c3086d9d50d001cc01713; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant
    ADD CONSTRAINT "UQ_5a6420c3086d9d50d001cc01713" UNIQUE (menu_id);


--
-- TOC entry 3221 (class 2606 OID 19171)
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (id);


--
-- TOC entry 3211 (class 2606 OID 19278)
-- Name: daysopen daysopen_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.daysopen
    ADD CONSTRAINT daysopen_pkey PRIMARY KEY (restaurant_id, day_open, opening);


--
-- TOC entry 3215 (class 2606 OID 19254)
-- Name: food food_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.food
    ADD CONSTRAINT food_pkey PRIMARY KEY (id);


--
-- TOC entry 3213 (class 2606 OID 19143)
-- Name: menu menu_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu
    ADD CONSTRAINT menu_pkey PRIMARY KEY (id);


--
-- TOC entry 3227 (class 2606 OID 19285)
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- TOC entry 3225 (class 2606 OID 19187)
-- Name: reservation_group reservation_group_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservation_group
    ADD CONSTRAINT reservation_group_pkey PRIMARY KEY (reservation_id, customer_id);


--
-- TOC entry 3223 (class 2606 OID 19177)
-- Name: reservation reservation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT reservation_pkey PRIMARY KEY (id);


--
-- TOC entry 3219 (class 2606 OID 19160)
-- Name: restaurant restaurant_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant
    ADD CONSTRAINT restaurant_pkey PRIMARY KEY (id);


--
-- TOC entry 3228 (class 2606 OID 19213)
-- Name: food FK_5149a648c96d6c3c7c670b500d6; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.food
    ADD CONSTRAINT "FK_5149a648c96d6c3c7c670b500d6" FOREIGN KEY (menu_id) REFERENCES public.menu(id);


--
-- TOC entry 3229 (class 2606 OID 19227)
-- Name: restaurant FK_5a6420c3086d9d50d001cc01713; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurant
    ADD CONSTRAINT "FK_5a6420c3086d9d50d001cc01713" FOREIGN KEY (menu_id) REFERENCES public.menu(id);


--
-- TOC entry 3233 (class 2606 OID 19286)
-- Name: orders orders_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(id);


--
-- TOC entry 3234 (class 2606 OID 19291)
-- Name: orders orders_food_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_food_id_fkey FOREIGN KEY (food_id) REFERENCES public.food(id);


--
-- TOC entry 3235 (class 2606 OID 19296)
-- Name: orders orders_reservation_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_reservation_id_fkey FOREIGN KEY (reservation_id) REFERENCES public.reservation(id);


--
-- TOC entry 3231 (class 2606 OID 19188)
-- Name: reservation_group reservation_group_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservation_group
    ADD CONSTRAINT reservation_group_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(id);


--
-- TOC entry 3232 (class 2606 OID 19193)
-- Name: reservation_group reservation_group_reservation_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservation_group
    ADD CONSTRAINT reservation_group_reservation_id_fkey FOREIGN KEY (reservation_id) REFERENCES public.reservation(id);


--
-- TOC entry 3230 (class 2606 OID 19178)
-- Name: reservation reservation_restaurant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT reservation_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES public.restaurant(id);


-- Completed on 2024-03-20 11:07:43

--
-- PostgreSQL database dump complete
--

