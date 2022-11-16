package com.revature.CharacterTracker.Models.Enums;

public enum Genre {
    NULL,

    BIOGRAPHY {
        @Override
        public String toString(){
            return "Biography";
        }
    },

    COMEDY {
        @Override
        public String toString(){
            return "Comedy";
        }
    },

    DRAMA {
        @Override
        public String toString(){
            return "Drama";
        }
    },

    ESSAY {
        @Override
        public String toString(){
            return "Essay";
        }
    },

    FABLE {
        @Override
        public String toString(){
            return "Fable";
        }
    },

    FANTASY {
        @Override
        public String toString(){
            return "Fantasy";
        }
    },

    FOLKLORE {
        @Override
        public String toString(){
            return "Folklore";
        }
    },

    HISTORICAL_FICTION {
        @Override
        public String toString(){
            return "Historical Fiction";
        }
    },

    HORROR {
        @Override
        public String toString(){
            return "Horror";
        }
    },

    MYSTERY {
        @Override
        public String toString(){
            return "Mystery";
        }
    },

    MYTHOLOGY {
        @Override
        public String toString(){
            return "Mythology";
        }
    },

    NONFICTION {
        @Override
        public String toString(){
            return "Nonfiction";
        }
    },

    POETRY {
        @Override
        public String toString(){
            return "Poetry";
        }
    },

    SCIENCE_FICTION {
        @Override
        public String toString(){
            return "Science Fiction";
        }
    },

    COUNT
}
