class Skill < ApplicationRecord
    belongs_to :character
    belongs_to :search
end
