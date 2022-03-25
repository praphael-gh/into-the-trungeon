class Character < ApplicationRecord
    has_many :skills
    has_many :items
    has_many :spells
    belongs_to :user
end
