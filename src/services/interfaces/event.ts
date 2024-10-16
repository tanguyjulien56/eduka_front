export interface TypeInterface {
  is_public: boolean;
}
export interface CategoryInterface extends TypeInterface {
  category: string;
}

export interface TagsInterface {
  tags: string[];
}
export interface CardEventInterface {
  firstname: string;
  title: string;
  start_date: Date;
  description: string;
  event_picture?: string | null;
  profil_picture?: string;
  city: string;
  tags?: string[] | null;
  latitude?: number;
  longitude?: number;
}

export interface EventInterface
  extends TypeInterface,
    CategoryInterface,
    CardEventInterface {
  id: string;
  startDate?: Date;
  endDate?: Date;
  created_at: Date;
  maxParticipants?: number;
  jackpotLink?: string;
  jackpotLimitDate?: Date;
  choices?: string[] | null;
  childrenList?: string[] | null;
  address?: string;
}

export interface AddEventInterface {
  title: string;
  description: string;
  start_date: Date;
  end_date: string;
  photo: string;
  guest_limit: number;
  is_public: boolean;
  category: string;
  status: string;
  tags: string[];
  city: string;
  address: string;
  location: JSON;
  user_id: string;
  picture: string;
  choices: string[];
}

export interface FormattedEventCardInterface {
  id: string;
  title: string;
  description: string;
  start_date: Date;
  end_date: string;
  guest_limit: number;
  is_public: boolean;
  category: string;
  user_id: string;
  status: string;
  tags: string[];
  city: string;
  address: {
    city: string;
    location: {
      lat: number;
      long: number;
    };
  };
  user: {
    lastname: string;
    firstname: string;
    profil_picture: string;
  };
  picture: string;
  latitude: number;
  longitude: number;
}
