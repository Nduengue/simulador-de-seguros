from datetime import datetime, timezone
import uuid, pytz


# ==============================================================================
def current_date_time():
    return datetime.now(timezone.utc)


# ==============================================================================
def generate_unique_id(alchemy_obj, db_session, attr=None):
    while True:
        new_id = str(uuid.uuid4())
        existing_id = (
            db_session.query(alchemy_obj)
            .filter(
                (alchemy_obj.id == new_id) if not attr else True,
                (getattr(alchemy_obj, attr) == new_id) if attr else True,
            )
            .first()
        )
        if not existing_id:
            return new_id


# ==============================================================================
def strpfloat(value):
    # Remove thousand separators and replace decimal comma with decimal point
    normalized_value = value.replace(",", "")
    return float(normalized_value)


# ==============================================================================
def convert_to_utc(date_str, date_format="%Y-%m-%d", source_timezone="Africa/Luanda"):
    """
    Convert a date string to a UTC datetime.

    :param date_str: Date string to be converted.
    :param date_format: Format of the date string.
    :param source_timezone: Source timezone of the date string.
    :return: Datetime in UTC.
    """
    # Parse the date string into a naive datetime object
    local_date = datetime.strptime(date_str, date_format)

    # Localize the naive datetime to the source timezone
    local_timezone = pytz.timezone(source_timezone)
    local_date = local_timezone.localize(local_date)

    # Convert the localized datetime to UTC
    utc_date = local_date.astimezone(pytz.utc)

    return utc_date


# ==============================================================================
def convert_utc_to_local(
    utc_datetime, target_timezone="Africa/Luanda", date_format=None
):
    """
    Convert a UTC datetime to a local datetime in a specified timezone.

    :param utc_datetime: Datetime in UTC to be converted.
    :param target_timezone: Target timezone to convert the UTC datetime into.
    :return: Localized datetime in the target timezone.
    """
    # Ensure the input datetime is in UTC
    if utc_datetime.tzinfo is None:
        utc_datetime = pytz.utc.localize(utc_datetime)

    # Convert the UTC datetime to the target timezone
    target_timezone_obj = pytz.timezone(target_timezone)
    local_datetime = utc_datetime.astimezone(target_timezone_obj)

    return local_datetime if not date_format else local_datetime.strftime(date_format)
