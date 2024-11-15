rates = [0.18, 0.9, 0.13, 0.22, 0.24]

discounts = [-5, -1]

coverage_rate = 77


sum_rates = sum(rates)
print(f"rates: {sum_rates}")

sum_discounts = sum(discounts)
print(f"discounts: {sum_discounts}")

rate_discount = sum_rates + sum_rates * (sum_discounts / 100)
print(f"rate_discount: {rate_discount}")

res = rate_discount * coverage_rate / 100
print(f"res: {res}")
