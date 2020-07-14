import random


class CheeseWhims:

    location = 'Campus'
    restaurants = [
        'A&W',
        'Tim Hortons',
        'Uncle Fatih\'s Pizza',
        'Donair Town',
        'Quesada - Burritos and Tacos',
        '가원',
        'Bamboo Garden Restaurant',
    ]

    # def __init__(self, time, day):
    #self.time = time
    #self.day = day

    def what_to_get_for_lunch_today(self):

        n = len(self.restaurants)
        # len() is an in-built function :()
        the_greatest_of_life_choices = random.randint(0, n-1)
        print(
            f'Today you are destined to have lunch from {self.restaurants[the_greatest_of_life_choices]}.\n'
        )
