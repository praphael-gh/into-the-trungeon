class Encounter < ApplicationRecord
    has_many :enemies
    has_many :searches
    has_many :traps
    has_many :conversations
    belongs_to :user
end
