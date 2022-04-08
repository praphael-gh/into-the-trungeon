class Character < ApplicationRecord
    has_many :skills
    has_many :items
    has_many :spells
    belongs_to :user

    amoeba do
        enable
        include_association :skills
        include_association :items
        include_association :spells
      end
end
